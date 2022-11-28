import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListWorkflowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Workflows" })
  workflows?: string[];
}
