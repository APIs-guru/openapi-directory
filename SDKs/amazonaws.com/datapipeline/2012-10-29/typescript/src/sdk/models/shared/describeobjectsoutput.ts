import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineObject } from "./pipelineobject";



// DescribeObjectsOutput
/** 
 * Contains the output of DescribeObjects.
**/
export class DescribeObjectsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasMoreResults" })
  hasMoreResults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineObjects", elemType: PipelineObject })
  pipelineObjects: PipelineObject[];
}
