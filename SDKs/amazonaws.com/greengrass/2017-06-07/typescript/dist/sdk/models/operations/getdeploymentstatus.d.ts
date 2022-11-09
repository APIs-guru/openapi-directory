import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDeploymentStatusPathParams extends SpeakeasyBase {
    deploymentId: string;
    groupId: string;
}
export declare class GetDeploymentStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeploymentStatusRequest extends SpeakeasyBase {
    pathParams: GetDeploymentStatusPathParams;
    headers: GetDeploymentStatusHeaders;
}
export declare class GetDeploymentStatusResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getDeploymentStatusResponse?: shared.GetDeploymentStatusResponse;
    statusCode: number;
}
