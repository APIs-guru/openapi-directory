import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutProtocolsListXAmzTargetEnum {
    Awsfms20180101PutProtocolsList = "AWSFMS_20180101.PutProtocolsList"
}
export declare class PutProtocolsListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutProtocolsListXAmzTargetEnum;
}
export declare class PutProtocolsListRequest extends SpeakeasyBase {
    headers: PutProtocolsListHeaders;
    request: shared.PutProtocolsListRequest;
}
export declare class PutProtocolsListResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidInputException?: any;
    invalidOperationException?: any;
    limitExceededException?: any;
    putProtocolsListResponse?: shared.PutProtocolsListResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
