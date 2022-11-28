import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowDefinition } from "./flowdefinition";



export class ListFlowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flows", elemType: FlowDefinition })
  flows?: FlowDefinition[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
