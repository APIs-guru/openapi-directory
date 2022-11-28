import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatus } from "./instancestatus";
export declare class DescribeInstanceStatusResult extends SpeakeasyBase {
    instanceStatuses?: InstanceStatus[];
    nextToken?: string;
}
