import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetPropertyTimestamp
/** 
 * An asset property timestamp entry containing the following information.
**/
export class AssetPropertyTimestamp extends SpeakeasyBase {
  @Metadata({ data: "json, name=offsetInNanos" })
  offsetInNanos?: string;

  @Metadata({ data: "json, name=timeInSeconds" })
  timeInSeconds: string;
}
