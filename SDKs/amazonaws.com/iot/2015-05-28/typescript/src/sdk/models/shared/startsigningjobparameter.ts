import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { SigningProfileParameter } from "./signingprofileparameter";



// StartSigningJobParameter
/** 
 * Information required to start a signing job.
**/
export class StartSigningJobParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: Destination;

  @SpeakeasyMetadata({ data: "json, name=signingProfileName" })
  signingProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=signingProfileParameter" })
  signingProfileParameter?: SigningProfileParameter;
}
