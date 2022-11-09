import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineObject } from "./pipelineobject";
/**
 * Contains the output of DescribeObjects.
**/
export declare class DescribeObjectsOutput extends SpeakeasyBase {
    hasMoreResults?: boolean;
    marker?: string;
    pipelineObjects: PipelineObject[];
}
