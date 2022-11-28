import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class DescribeInstancesInput extends SpeakeasyBase {
    fleetId: string;
    instanceId?: string;
    limit?: number;
    location?: string;
    nextToken?: string;
}
