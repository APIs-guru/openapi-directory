import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
