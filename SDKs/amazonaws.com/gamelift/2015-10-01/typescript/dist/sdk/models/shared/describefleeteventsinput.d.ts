import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class DescribeFleetEventsInput extends SpeakeasyBase {
    endTime?: Date;
    fleetId: string;
    limit?: number;
    nextToken?: string;
    startTime?: Date;
}
