import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeneratedPolicyResult } from "./generatedpolicyresult";
import { JobDetails } from "./jobdetails";



export class GetGeneratedPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generatedPolicyResult" })
  generatedPolicyResult: GeneratedPolicyResult;

  @SpeakeasyMetadata({ data: "json, name=jobDetails" })
  jobDetails: JobDetails;
}
