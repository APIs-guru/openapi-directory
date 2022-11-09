import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssessmentTarget
/** 
 * Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action.
**/
export class AssessmentTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=resourceGroupArn" })
  resourceGroupArn?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
