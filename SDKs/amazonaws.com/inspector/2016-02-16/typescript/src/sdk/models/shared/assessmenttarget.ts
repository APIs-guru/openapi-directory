import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssessmentTarget
/** 
 * Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action.
**/
export class AssessmentTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=resourceGroupArn" })
  resourceGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
