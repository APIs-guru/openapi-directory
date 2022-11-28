import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetViolationDetailsXAmzTargetEnum {
    Awsfms20180101GetViolationDetails = "AWSFMS_20180101.GetViolationDetails"
}
export declare class GetViolationDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetViolationDetailsXAmzTargetEnum;
}
export declare class GetViolationDetailsRequest extends SpeakeasyBase {
    headers: GetViolationDetailsHeaders;
    request: shared.GetViolationDetailsRequest;
}
export declare class GetViolationDetailsResponse extends SpeakeasyBase {
    contentType: string;
    getViolationDetailsResponse?: shared.GetViolationDetailsResponse;
    internalErrorException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
