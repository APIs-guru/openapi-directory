import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEntitlementsXAmzTargetEnum {
    AwsmpEntitlementServiceGetEntitlements = "AWSMPEntitlementService.GetEntitlements"
}
export declare class GetEntitlementsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEntitlementsXAmzTargetEnum;
}
export declare class GetEntitlementsRequest extends SpeakeasyBase {
    headers: GetEntitlementsHeaders;
    request: shared.GetEntitlementsRequest;
}
export declare class GetEntitlementsResponse extends SpeakeasyBase {
    contentType: string;
    getEntitlementsResult?: shared.GetEntitlementsResult;
    internalServiceErrorException?: shared.InternalServiceErrorException;
    invalidParameterException?: shared.InvalidParameterException;
    statusCode: number;
    throttlingException?: shared.ThrottlingException;
}
