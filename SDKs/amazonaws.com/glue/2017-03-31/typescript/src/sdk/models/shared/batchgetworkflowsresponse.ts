import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workflow } from "./workflow";



export class BatchGetWorkflowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MissingWorkflows" })
  missingWorkflows?: string[];

  @SpeakeasyMetadata({ data: "json, name=Workflows", elemType: Workflow })
  workflows?: Workflow[];
}
