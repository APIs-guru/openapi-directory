import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartPolicyGenerationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;
}
