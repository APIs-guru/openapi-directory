import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAdminAccountXAmzTargetEnum {
    Awsfms20180101GetAdminAccount = "AWSFMS_20180101.GetAdminAccount"
}
export declare class GetAdminAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAdminAccountXAmzTargetEnum;
}
export declare class GetAdminAccountRequest extends SpeakeasyBase {
    headers: GetAdminAccountHeaders;
    request: Map<string, any>;
}
export declare class GetAdminAccountResponse extends SpeakeasyBase {
    contentType: string;
    getAdminAccountResponse?: shared.GetAdminAccountResponse;
    internalErrorException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
