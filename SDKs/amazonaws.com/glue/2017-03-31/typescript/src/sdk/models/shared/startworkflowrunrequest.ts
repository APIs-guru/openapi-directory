import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartWorkflowRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
