import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlockPublicAccessConfiguration } from "./blockpublicaccessconfiguration";


export class PutBlockPublicAccessConfigurationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlockPublicAccessConfiguration" })
  blockPublicAccessConfiguration: BlockPublicAccessConfiguration;
}
