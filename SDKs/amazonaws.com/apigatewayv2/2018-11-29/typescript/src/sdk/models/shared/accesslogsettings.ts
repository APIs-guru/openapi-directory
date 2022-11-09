import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessLogSettings
/** 
 * Settings for logging access in a stage.
**/
export class AccessLogSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @Metadata({ data: "json, name=Format" })
  format?: string;
}
