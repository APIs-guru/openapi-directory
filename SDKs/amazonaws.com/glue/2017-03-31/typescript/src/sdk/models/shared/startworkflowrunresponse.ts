import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartWorkflowRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId?: string;
}
