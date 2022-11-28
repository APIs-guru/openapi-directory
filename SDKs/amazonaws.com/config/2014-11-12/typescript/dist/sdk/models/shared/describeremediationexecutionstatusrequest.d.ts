import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceKey } from "./resourcekey";
export declare class DescribeRemediationExecutionStatusRequest extends SpeakeasyBase {
    configRuleName: string;
    limit?: number;
    nextToken?: string;
    resourceKeys?: ResourceKey[];
}
