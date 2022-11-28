import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDeploymentPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class CreateDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare enum CreateDeploymentRequestBodyDeploymentTypeEnum {
    NewDeployment = "NewDeployment",
    Redeployment = "Redeployment",
    ResetDeployment = "ResetDeployment",
    ForceResetDeployment = "ForceResetDeployment"
}
export declare class CreateDeploymentRequestBody extends SpeakeasyBase {
    deploymentId?: string;
    deploymentType: CreateDeploymentRequestBodyDeploymentTypeEnum;
    groupVersionId?: string;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    pathParams: CreateDeploymentPathParams;
    headers: CreateDeploymentHeaders;
    request: CreateDeploymentRequestBody;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createDeploymentResponse?: shared.CreateDeploymentResponse;
    statusCode: number;
}
