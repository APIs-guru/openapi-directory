import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlockPublicAccessConfiguration } from "./blockpublicaccessconfiguration";
import { BlockPublicAccessConfigurationMetadata } from "./blockpublicaccessconfigurationmetadata";


export class GetBlockPublicAccessConfigurationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlockPublicAccessConfiguration" })
  blockPublicAccessConfiguration: BlockPublicAccessConfiguration;

  @Metadata({ data: "json, name=BlockPublicAccessConfigurationMetadata" })
  blockPublicAccessConfigurationMetadata: BlockPublicAccessConfigurationMetadata;
}
