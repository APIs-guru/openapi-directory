import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Workflow } from "./workflow";


export class GetWorkflowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Workflow" })
  workflow?: Workflow;
}
