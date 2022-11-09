import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResumeWorkflowRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NodeIds" })
  nodeIds?: string[];

  @Metadata({ data: "json, name=RunId" })
  runId?: string;
}
