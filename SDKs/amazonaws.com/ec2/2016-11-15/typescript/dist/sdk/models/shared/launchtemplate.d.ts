import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a launch template.
**/
export declare class LaunchTemplate extends SpeakeasyBase {
    createTime?: Date;
    createdBy?: string;
    defaultVersionNumber?: number;
    latestVersionNumber?: number;
    launchTemplateId?: string;
    launchTemplateName?: string;
    tags?: Tag[];
}
