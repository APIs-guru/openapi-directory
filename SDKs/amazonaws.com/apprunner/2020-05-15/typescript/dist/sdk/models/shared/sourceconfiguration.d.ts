import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationConfiguration } from "./authenticationconfiguration";
import { CodeRepository } from "./coderepository";
import { ImageRepository } from "./imagerepository";
/**
 * Describes the source deployed to an AWS App Runner service. It can be a code or an image repository.
**/
export declare class SourceConfiguration extends SpeakeasyBase {
    authenticationConfiguration?: AuthenticationConfiguration;
    autoDeploymentsEnabled?: boolean;
    codeRepository?: CodeRepository;
    imageRepository?: ImageRepository;
}
