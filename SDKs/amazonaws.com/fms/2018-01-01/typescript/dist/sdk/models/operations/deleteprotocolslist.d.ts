import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProtocolsListXAmzTargetEnum {
    Awsfms20180101DeleteProtocolsList = "AWSFMS_20180101.DeleteProtocolsList"
}
export declare class DeleteProtocolsListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProtocolsListXAmzTargetEnum;
}
export declare class DeleteProtocolsListRequest extends SpeakeasyBase {
    headers: DeleteProtocolsListHeaders;
    request: shared.DeleteProtocolsListRequest;
}
export declare class DeleteProtocolsListResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
