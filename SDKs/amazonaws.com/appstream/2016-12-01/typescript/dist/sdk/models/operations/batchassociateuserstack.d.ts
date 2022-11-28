import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchAssociateUserStackXAmzTargetEnum {
    PhotonAdminProxyServiceBatchAssociateUserStack = "PhotonAdminProxyService.BatchAssociateUserStack"
}
export declare class BatchAssociateUserStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchAssociateUserStackXAmzTargetEnum;
}
export declare class BatchAssociateUserStackRequest extends SpeakeasyBase {
    headers: BatchAssociateUserStackHeaders;
    request: shared.BatchAssociateUserStackRequest;
}
export declare class BatchAssociateUserStackResponse extends SpeakeasyBase {
    batchAssociateUserStackResult?: shared.BatchAssociateUserStackResult;
    contentType: string;
    invalidParameterCombinationException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
}
