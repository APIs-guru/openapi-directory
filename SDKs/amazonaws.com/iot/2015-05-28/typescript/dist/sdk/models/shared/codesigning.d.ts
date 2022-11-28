import { SpeakeasyBase } from "../../../internal/utils";
import { CustomCodeSigning } from "./customcodesigning";
import { StartSigningJobParameter } from "./startsigningjobparameter";
/**
 * Describes the method to use when code signing a file.
**/
export declare class CodeSigning extends SpeakeasyBase {
    awsSignerJobId?: string;
    customCodeSigning?: CustomCodeSigning;
    startSigningJobParameter?: StartSigningJobParameter;
}
