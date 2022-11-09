import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Workflow } from "./workflow";


export class BatchGetWorkflowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MissingWorkflows" })
  missingWorkflows?: string[];

  @Metadata({ data: "json, name=Workflows", elemType: shared.Workflow })
  workflows?: Workflow[];
}
