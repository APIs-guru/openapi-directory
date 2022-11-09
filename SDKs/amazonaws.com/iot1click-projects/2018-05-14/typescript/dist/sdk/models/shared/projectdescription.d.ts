import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PlacementTemplate } from "./placementtemplate";
/**
 * An object providing detailed information for a particular project associated with an AWS account and region.
**/
export declare class ProjectDescription extends SpeakeasyBase {
    arn?: string;
    createdDate: Date;
    description?: string;
    placementTemplate?: PlacementTemplate;
    projectName: string;
    tags?: Map<string, string>;
    updatedDate: Date;
}
