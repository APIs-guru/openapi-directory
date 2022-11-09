import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentTypeEnum } from "./deploymenttypeenum";
import { ErrorDetail } from "./errordetail";
/**
 * Information about an individual group deployment in a bulk deployment operation.
**/
export declare class BulkDeploymentResult extends SpeakeasyBase {
    createdAt?: string;
    deploymentArn?: string;
    deploymentId?: string;
    deploymentStatus?: string;
    deploymentType?: DeploymentTypeEnum;
    errorDetails?: ErrorDetail[];
    errorMessage?: string;
    groupArn?: string;
}
