import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineObject } from "./pipelineobject";


// DescribeObjectsOutput
/** 
 * Contains the output of DescribeObjects.
**/
export class DescribeObjectsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasMoreResults" })
  hasMoreResults?: boolean;

  @Metadata({ data: "json, name=marker" })
  marker?: string;

  @Metadata({ data: "json, name=pipelineObjects", elemType: shared.PipelineObject })
  pipelineObjects: PipelineObject[];
}
