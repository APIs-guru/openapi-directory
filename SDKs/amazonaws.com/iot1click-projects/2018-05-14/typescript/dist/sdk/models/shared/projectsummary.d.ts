import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object providing summary information for a particular project for an associated AWS account and region.
**/
export declare class ProjectSummary extends SpeakeasyBase {
    arn?: string;
    createdDate: Date;
    projectName: string;
    tags?: Map<string, string>;
    updatedDate: Date;
}
