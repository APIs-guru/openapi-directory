import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlockPublicAccessConfiguration } from "./blockpublicaccessconfiguration";
import { BlockPublicAccessConfigurationMetadata } from "./blockpublicaccessconfigurationmetadata";



export class GetBlockPublicAccessConfigurationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockPublicAccessConfiguration" })
  blockPublicAccessConfiguration: BlockPublicAccessConfiguration;

  @SpeakeasyMetadata({ data: "json, name=BlockPublicAccessConfigurationMetadata" })
  blockPublicAccessConfigurationMetadata: BlockPublicAccessConfigurationMetadata;
}
