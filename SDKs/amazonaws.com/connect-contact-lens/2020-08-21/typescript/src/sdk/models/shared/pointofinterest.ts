import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PointOfInterest
/** 
 * The section of the contact audio where that category rule was detected.
**/
export class PointOfInterest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BeginOffsetMillis" })
  beginOffsetMillis: number;

  @Metadata({ data: "json, name=EndOffsetMillis" })
  endOffsetMillis: number;
}
