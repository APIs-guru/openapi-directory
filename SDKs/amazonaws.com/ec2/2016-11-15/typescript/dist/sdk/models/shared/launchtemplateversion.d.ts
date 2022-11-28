import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseLaunchTemplateData } from "./responselaunchtemplatedata";
/**
 * Describes a launch template version.
**/
export declare class LaunchTemplateVersion extends SpeakeasyBase {
    createTime?: Date;
    createdBy?: string;
    defaultVersion?: boolean;
    launchTemplateData?: ResponseLaunchTemplateData;
    launchTemplateId?: string;
    launchTemplateName?: string;
    versionDescription?: string;
    versionNumber?: number;
}
