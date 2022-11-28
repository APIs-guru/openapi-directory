import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to the update project operation.
**/
export declare class UpdateProjectRequest extends SpeakeasyBase {
    arn: string;
    defaultJobTimeoutMinutes?: number;
    name?: string;
}
