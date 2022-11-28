import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action.
**/
export declare class AssessmentTarget extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    name: string;
    resourceGroupArn?: string;
    updatedAt: Date;
}
