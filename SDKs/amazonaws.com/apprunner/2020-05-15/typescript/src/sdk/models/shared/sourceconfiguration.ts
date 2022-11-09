import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationConfiguration } from "./authenticationconfiguration";
import { CodeRepository } from "./coderepository";
import { ImageRepository } from "./imagerepository";


// SourceConfiguration
/** 
 * Describes the source deployed to an AWS App Runner service. It can be a code or an image repository.
**/
export class SourceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationConfiguration" })
  authenticationConfiguration?: AuthenticationConfiguration;

  @Metadata({ data: "json, name=AutoDeploymentsEnabled" })
  autoDeploymentsEnabled?: boolean;

  @Metadata({ data: "json, name=CodeRepository" })
  codeRepository?: CodeRepository;

  @Metadata({ data: "json, name=ImageRepository" })
  imageRepository?: ImageRepository;
}
