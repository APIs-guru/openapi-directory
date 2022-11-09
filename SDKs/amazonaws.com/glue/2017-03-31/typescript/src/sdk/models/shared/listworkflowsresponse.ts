import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListWorkflowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Workflows" })
  workflows?: string[];
}
