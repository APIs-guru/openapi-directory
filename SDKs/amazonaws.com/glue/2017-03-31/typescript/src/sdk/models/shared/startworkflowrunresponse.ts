import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartWorkflowRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RunId" })
  runId?: string;
}
