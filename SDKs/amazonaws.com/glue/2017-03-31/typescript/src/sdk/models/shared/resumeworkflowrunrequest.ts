import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResumeWorkflowRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NodeIds" })
  nodeIds: string[];

  @Metadata({ data: "json, name=RunId" })
  runId: string;
}
