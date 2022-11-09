import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigurationItemTypeEnum } from "./configurationitemtypeenum";
import { Filter } from "./filter";
import { OrderByElement } from "./orderbyelement";


export class ListConfigurationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationType" })
  configurationType: ConfigurationItemTypeEnum;

  @Metadata({ data: "json, name=filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=orderBy", elemType: shared.OrderByElement })
  orderBy?: OrderByElement[];
}
