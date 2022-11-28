import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DescribeObjects.
**/
export declare class DescribeObjectsInput extends SpeakeasyBase {
    evaluateExpressions?: boolean;
    marker?: string;
    objectIds: string[];
    pipelineId: string;
}
