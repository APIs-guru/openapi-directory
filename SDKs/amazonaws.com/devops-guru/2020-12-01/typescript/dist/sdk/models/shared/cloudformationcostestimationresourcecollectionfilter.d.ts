import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an AWS CloudFormation stack used to create a monthly cost estimate for DevOps Guru to analyze AWS resources. The maximum number of stacks you can specify for a cost estimate is one. The estimate created is for the cost to analyze the AWS resources defined by the stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>AWS CloudFormation User Guide</i>.
**/
export declare class CloudFormationCostEstimationResourceCollectionFilter extends SpeakeasyBase {
    stackNames?: string[];
}
