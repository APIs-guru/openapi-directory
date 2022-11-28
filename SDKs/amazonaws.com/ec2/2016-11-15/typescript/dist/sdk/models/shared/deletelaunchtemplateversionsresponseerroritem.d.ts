import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseError } from "./responseerror";
/**
 * Describes a launch template version that could not be deleted.
**/
export declare class DeleteLaunchTemplateVersionsResponseErrorItem extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    responseError?: ResponseError;
    versionNumber?: number;
}
