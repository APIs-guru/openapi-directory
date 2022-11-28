import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workflow } from "./workflow";



export class GetWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Workflow" })
  workflow?: Workflow;
}
