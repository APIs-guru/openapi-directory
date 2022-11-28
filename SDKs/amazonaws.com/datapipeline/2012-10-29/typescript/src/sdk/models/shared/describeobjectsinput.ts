import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeObjectsInput
/** 
 * Contains the parameters for DescribeObjects.
**/
export class DescribeObjectsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluateExpressions" })
  evaluateExpressions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=objectIds" })
  objectIds: string[];

  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;
}
