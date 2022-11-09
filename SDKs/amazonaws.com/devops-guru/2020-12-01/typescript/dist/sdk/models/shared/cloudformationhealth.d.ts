import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightHealth } from "./insighthealth";
/**
 *  Information about the health of AWS resources in your account that are specified by an AWS CloudFormation stack.
**/
export declare class CloudFormationHealth extends SpeakeasyBase {
    insight?: InsightHealth;
    stackName?: string;
}
