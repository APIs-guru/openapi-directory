import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWorkflowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
