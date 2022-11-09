import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";
/**
 * The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time.
**/
export declare class EndpointFilter extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    modelArn?: string;
    status?: EndpointStatusEnum;
}
