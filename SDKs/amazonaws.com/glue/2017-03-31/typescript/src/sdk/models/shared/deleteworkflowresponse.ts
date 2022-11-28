import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
