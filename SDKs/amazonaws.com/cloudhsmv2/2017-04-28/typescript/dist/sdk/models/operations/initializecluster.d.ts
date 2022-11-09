import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum InitializeClusterXAmzTargetEnum {
    BaldrApiServiceInitializeCluster = "BaldrApiService.InitializeCluster"
}
export declare class InitializeClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InitializeClusterXAmzTargetEnum;
}
export declare class InitializeClusterRequest extends SpeakeasyBase {
    headers: InitializeClusterHeaders;
    request: shared.InitializeClusterRequest;
}
export declare class InitializeClusterResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    initializeClusterResponse?: shared.InitializeClusterResponse;
    statusCode: number;
}
