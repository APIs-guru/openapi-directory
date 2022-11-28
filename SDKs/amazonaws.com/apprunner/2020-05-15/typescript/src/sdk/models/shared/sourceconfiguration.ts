import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationConfiguration } from "./authenticationconfiguration";
import { CodeRepository } from "./coderepository";
import { ImageRepository } from "./imagerepository";



// SourceConfiguration
/** 
 * Describes the source deployed to an AWS App Runner service. It can be a code or an image repository.
**/
export class SourceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthenticationConfiguration" })
  authenticationConfiguration?: AuthenticationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=AutoDeploymentsEnabled" })
  autoDeploymentsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CodeRepository" })
  codeRepository?: CodeRepository;

  @SpeakeasyMetadata({ data: "json, name=ImageRepository" })
  imageRepository?: ImageRepository;
}
