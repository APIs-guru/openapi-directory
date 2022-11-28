import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessLogSettings
/** 
 * Settings for logging access in a stage.
**/
export class AccessLogSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;
}
