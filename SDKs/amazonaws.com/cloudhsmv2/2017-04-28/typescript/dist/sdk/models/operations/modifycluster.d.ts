import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ModifyClusterXAmzTargetEnum {
    BaldrApiServiceModifyCluster = "BaldrApiService.ModifyCluster"
}
export declare class ModifyClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyClusterXAmzTargetEnum;
}
export declare class ModifyClusterRequest extends SpeakeasyBase {
    headers: ModifyClusterHeaders;
    request: shared.ModifyClusterRequest;
}
export declare class ModifyClusterResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    modifyClusterResponse?: shared.ModifyClusterResponse;
    statusCode: number;
}
