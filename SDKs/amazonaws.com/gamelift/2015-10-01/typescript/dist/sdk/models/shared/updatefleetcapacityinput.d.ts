import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class UpdateFleetCapacityInput extends SpeakeasyBase {
    desiredInstances?: number;
    fleetId: string;
    location?: string;
    maxSize?: number;
    minSize?: number;
}
