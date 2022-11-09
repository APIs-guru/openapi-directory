import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Configuration } from "./configuration";


export class DescribeEventConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=eventConfigurations", elemType: shared.Configuration })
  eventConfigurations?: Map<string, Configuration>;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;
}
