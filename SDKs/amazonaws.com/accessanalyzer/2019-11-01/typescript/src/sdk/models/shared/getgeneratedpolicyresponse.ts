import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GeneratedPolicyResult } from "./generatedpolicyresult";
import { JobDetails } from "./jobdetails";


export class GetGeneratedPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=generatedPolicyResult" })
  generatedPolicyResult: GeneratedPolicyResult;

  @Metadata({ data: "json, name=jobDetails" })
  jobDetails: JobDetails;
}
