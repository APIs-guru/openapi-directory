import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResumeWorkflowRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NodeIds" })
  nodeIds: string[];

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId: string;
}
