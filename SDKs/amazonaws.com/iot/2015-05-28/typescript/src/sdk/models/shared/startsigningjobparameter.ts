import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Destination } from "./destination";
import { SigningProfileParameter } from "./signingprofileparameter";


// StartSigningJobParameter
/** 
 * Information required to start a signing job.
**/
export class StartSigningJobParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: Destination;

  @Metadata({ data: "json, name=signingProfileName" })
  signingProfileName?: string;

  @Metadata({ data: "json, name=signingProfileParameter" })
  signingProfileParameter?: SigningProfileParameter;
}
