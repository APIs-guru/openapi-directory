import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomCodeSigning } from "./customcodesigning";
import { StartSigningJobParameter } from "./startsigningjobparameter";



// CodeSigning
/** 
 * Describes the method to use when code signing a file.
**/
export class CodeSigning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsSignerJobId" })
  awsSignerJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=customCodeSigning" })
  customCodeSigning?: CustomCodeSigning;

  @SpeakeasyMetadata({ data: "json, name=startSigningJobParameter" })
  startSigningJobParameter?: StartSigningJobParameter;
}
