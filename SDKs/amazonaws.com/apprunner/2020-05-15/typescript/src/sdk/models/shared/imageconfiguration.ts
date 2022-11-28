import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageConfiguration
/** 
 * Describes the configuration that AWS App Runner uses to run an App Runner service using an image pulled from a source image repository.
**/
export class ImageConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=RuntimeEnvironmentVariables" })
  runtimeEnvironmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=StartCommand" })
  startCommand?: string;
}
