import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateClusterXAmzTargetEnum {
    BaldrApiServiceCreateCluster = "BaldrApiService.CreateCluster"
}
export declare class CreateClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateClusterXAmzTargetEnum;
}
export declare class CreateClusterRequest extends SpeakeasyBase {
    headers: CreateClusterHeaders;
    request: shared.CreateClusterRequest;
}
export declare class CreateClusterResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    cloudHsmTagException?: any;
    contentType: string;
    createClusterResponse?: shared.CreateClusterResponse;
    statusCode: number;
}
