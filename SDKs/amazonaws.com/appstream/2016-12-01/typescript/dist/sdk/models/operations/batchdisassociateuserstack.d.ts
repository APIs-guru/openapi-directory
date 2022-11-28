import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDisassociateUserStackXAmzTargetEnum {
    PhotonAdminProxyServiceBatchDisassociateUserStack = "PhotonAdminProxyService.BatchDisassociateUserStack"
}
export declare class BatchDisassociateUserStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDisassociateUserStackXAmzTargetEnum;
}
export declare class BatchDisassociateUserStackRequest extends SpeakeasyBase {
    headers: BatchDisassociateUserStackHeaders;
    request: shared.BatchDisassociateUserStackRequest;
}
export declare class BatchDisassociateUserStackResponse extends SpeakeasyBase {
    batchDisassociateUserStackResult?: shared.BatchDisassociateUserStackResult;
    contentType: string;
    invalidParameterCombinationException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
}
