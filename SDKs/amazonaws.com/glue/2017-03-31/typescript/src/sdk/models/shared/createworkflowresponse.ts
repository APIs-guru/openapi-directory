import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateWorkflowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
