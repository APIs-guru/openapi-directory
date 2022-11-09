import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteClusterXAmzTargetEnum {
    BaldrApiServiceDeleteCluster = "BaldrApiService.DeleteCluster"
}
export declare class DeleteClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteClusterXAmzTargetEnum;
}
export declare class DeleteClusterRequest extends SpeakeasyBase {
    headers: DeleteClusterHeaders;
    request: shared.DeleteClusterRequest;
}
export declare class DeleteClusterResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    cloudHsmTagException?: any;
    contentType: string;
    deleteClusterResponse?: shared.DeleteClusterResponse;
    statusCode: number;
}
