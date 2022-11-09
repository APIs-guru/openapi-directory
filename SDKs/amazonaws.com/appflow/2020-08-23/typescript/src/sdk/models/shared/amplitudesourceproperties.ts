import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AmplitudeSourceProperties
/** 
 *  The properties that are applied when Amplitude is being used as a source. 
**/
export class AmplitudeSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object: string;
}
