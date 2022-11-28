import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.
**/
export declare class Deployment extends SpeakeasyBase {
    autoDeployed?: boolean;
    createdDate?: Date;
    deploymentId?: string;
    deploymentStatus?: DeploymentStatusEnum;
    deploymentStatusMessage?: string;
    description?: string;
}
