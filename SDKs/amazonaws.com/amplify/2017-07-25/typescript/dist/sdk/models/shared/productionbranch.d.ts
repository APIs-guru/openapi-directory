import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  Describes the information about a production branch for an Amplify app.
**/
export declare class ProductionBranch extends SpeakeasyBase {
    branchName?: string;
    lastDeployTime?: Date;
    status?: string;
    thumbnailUrl?: string;
}
