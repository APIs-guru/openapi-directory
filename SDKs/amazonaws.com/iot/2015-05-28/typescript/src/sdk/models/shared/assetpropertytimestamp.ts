import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetPropertyTimestamp
/** 
 * An asset property timestamp entry containing the following information.
**/
export class AssetPropertyTimestamp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offsetInNanos" })
  offsetInNanos?: string;

  @SpeakeasyMetadata({ data: "json, name=timeInSeconds" })
  timeInSeconds: string;
}
