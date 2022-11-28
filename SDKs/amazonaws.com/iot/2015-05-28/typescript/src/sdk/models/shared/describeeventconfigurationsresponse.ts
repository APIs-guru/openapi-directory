import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";



export class DescribeEventConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=eventConfigurations", elemType: Configuration })
  eventConfigurations?: Map<string, Configuration>;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;
}
