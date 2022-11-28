import { SpeakeasyBase } from "../../../internal/utils";
import { FlowDefinition } from "./flowdefinition";
export declare class ListFlowsResponse extends SpeakeasyBase {
    flows?: FlowDefinition[];
    nextToken?: string;
}
