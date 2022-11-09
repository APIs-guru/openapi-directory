import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartPolicyGenerationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId: string;
}
