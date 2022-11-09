import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageConfiguration
/** 
 * Describes the configuration that AWS App Runner uses to run an App Runner service using an image pulled from a source image repository.
**/
export class ImageConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Port" })
  port?: string;

  @Metadata({ data: "json, name=RuntimeEnvironmentVariables" })
  runtimeEnvironmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=StartCommand" })
  startCommand?: string;
}
