import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationExceptionResourceKey } from "./remediationexceptionresourcekey";
export declare class DescribeRemediationExceptionsRequest extends SpeakeasyBase {
    configRuleName: string;
    limit?: number;
    nextToken?: string;
    resourceKeys?: RemediationExceptionResourceKey[];
}
