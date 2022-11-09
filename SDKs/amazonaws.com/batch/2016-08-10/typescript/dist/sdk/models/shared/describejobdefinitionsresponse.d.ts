import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobDefinition } from "./jobdefinition";
export declare class DescribeJobDefinitionsResponse extends SpeakeasyBase {
    jobDefinitions?: JobDefinition[];
    nextToken?: string;
}
