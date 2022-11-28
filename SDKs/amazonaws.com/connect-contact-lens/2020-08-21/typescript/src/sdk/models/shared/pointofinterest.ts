import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PointOfInterest
/** 
 * The section of the contact audio where that category rule was detected.
**/
export class PointOfInterest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BeginOffsetMillis" })
  beginOffsetMillis: number;

  @SpeakeasyMetadata({ data: "json, name=EndOffsetMillis" })
  endOffsetMillis: number;
}
