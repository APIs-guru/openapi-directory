import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the configuration that AWS App Runner uses to run an App Runner service using an image pulled from a source image repository.
**/
export declare class ImageConfiguration extends SpeakeasyBase {
    port?: string;
    runtimeEnvironmentVariables?: Map<string, string>;
    startCommand?: string;
}
