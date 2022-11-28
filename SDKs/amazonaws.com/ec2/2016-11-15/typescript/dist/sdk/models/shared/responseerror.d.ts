import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateErrorCodeEnum } from "./launchtemplateerrorcodeenum";
/**
 * Describes the error that's returned when you cannot delete a launch template version.
**/
export declare class ResponseError extends SpeakeasyBase {
    code?: LaunchTemplateErrorCodeEnum;
    message?: string;
}
