import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  Information about AWS CloudFormation stacks. You can use up to 500 stacks to specify which AWS resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>AWS CloudFormation User Guide</i>.
**/
export declare class CloudFormationCollectionFilter extends SpeakeasyBase {
    stackNames?: string[];
}
