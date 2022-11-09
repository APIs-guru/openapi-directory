import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateWorkflowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
