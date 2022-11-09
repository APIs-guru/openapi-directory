import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartWorkflowRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
