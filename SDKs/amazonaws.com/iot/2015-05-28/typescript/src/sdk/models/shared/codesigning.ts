import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomCodeSigning } from "./customcodesigning";
import { StartSigningJobParameter } from "./startsigningjobparameter";


// CodeSigning
/** 
 * Describes the method to use when code signing a file.
**/
export class CodeSigning extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsSignerJobId" })
  awsSignerJobId?: string;

  @Metadata({ data: "json, name=customCodeSigning" })
  customCodeSigning?: CustomCodeSigning;

  @Metadata({ data: "json, name=startSigningJobParameter" })
  startSigningJobParameter?: StartSigningJobParameter;
}
