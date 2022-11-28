import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { SigningProfileParameter } from "./signingprofileparameter";
/**
 * Information required to start a signing job.
**/
export declare class StartSigningJobParameter extends SpeakeasyBase {
    destination?: Destination;
    signingProfileName?: string;
    signingProfileParameter?: SigningProfileParameter;
}
