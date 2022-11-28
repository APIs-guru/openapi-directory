import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an application version deployment.
**/
export declare class Deployment extends SpeakeasyBase {
    deploymentId?: number;
    deploymentTime?: Date;
    status?: string;
    versionLabel?: string;
}
