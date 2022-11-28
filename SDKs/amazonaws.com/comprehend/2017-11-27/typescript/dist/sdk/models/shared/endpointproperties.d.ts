import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";
/**
 * Specifies information about the specified endpoint.
**/
export declare class EndpointProperties extends SpeakeasyBase {
    creationTime?: Date;
    currentInferenceUnits?: number;
    dataAccessRoleArn?: string;
    desiredInferenceUnits?: number;
    endpointArn?: string;
    lastModifiedTime?: Date;
    message?: string;
    modelArn?: string;
    status?: EndpointStatusEnum;
}
