import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FlowDefinition } from "./flowdefinition";


export class ListFlowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=flows", elemType: shared.FlowDefinition })
  flows?: FlowDefinition[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
