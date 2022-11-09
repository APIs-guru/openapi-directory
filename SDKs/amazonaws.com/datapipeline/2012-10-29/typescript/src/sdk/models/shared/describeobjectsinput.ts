import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeObjectsInput
/** 
 * Contains the parameters for DescribeObjects.
**/
export class DescribeObjectsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=evaluateExpressions" })
  evaluateExpressions?: boolean;

  @Metadata({ data: "json, name=marker" })
  marker?: string;

  @Metadata({ data: "json, name=objectIds" })
  objectIds: string[];

  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;
}
