import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AmplitudeSourceProperties
/** 
 *  The properties that are applied when Amplitude is being used as a source. 
**/
export class AmplitudeSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
