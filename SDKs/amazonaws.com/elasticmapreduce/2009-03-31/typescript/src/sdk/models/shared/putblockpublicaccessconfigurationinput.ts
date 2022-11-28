import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlockPublicAccessConfiguration } from "./blockpublicaccessconfiguration";



export class PutBlockPublicAccessConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockPublicAccessConfiguration" })
  blockPublicAccessConfiguration: BlockPublicAccessConfiguration;
}
