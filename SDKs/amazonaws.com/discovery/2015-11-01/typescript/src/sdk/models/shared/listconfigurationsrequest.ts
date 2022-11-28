import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationItemTypeEnum } from "./configurationitemtypeenum";
import { Filter } from "./filter";
import { OrderByElement } from "./orderbyelement";



export class ListConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationType" })
  configurationType: ConfigurationItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: Filter })
  filters?: Filter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=orderBy", elemType: OrderByElement })
  orderBy?: OrderByElement[];
}
