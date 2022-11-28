import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetProtocolsListXAmzTargetEnum {
    Awsfms20180101GetProtocolsList = "AWSFMS_20180101.GetProtocolsList"
}
export declare class GetProtocolsListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetProtocolsListXAmzTargetEnum;
}
export declare class GetProtocolsListRequest extends SpeakeasyBase {
    headers: GetProtocolsListHeaders;
    request: shared.GetProtocolsListRequest;
}
export declare class GetProtocolsListResponse extends SpeakeasyBase {
    contentType: string;
    getProtocolsListResponse?: shared.GetProtocolsListResponse;
    internalErrorException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
