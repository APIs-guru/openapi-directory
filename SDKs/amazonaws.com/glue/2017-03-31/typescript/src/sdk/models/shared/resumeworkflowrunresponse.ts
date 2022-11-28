import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResumeWorkflowRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NodeIds" })
  nodeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId?: string;
}
