import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetComplianceDetailXAmzTargetEnum {
    Awsfms20180101GetComplianceDetail = "AWSFMS_20180101.GetComplianceDetail"
}
export declare class GetComplianceDetailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceDetailXAmzTargetEnum;
}
export declare class GetComplianceDetailRequest extends SpeakeasyBase {
    headers: GetComplianceDetailHeaders;
    request: shared.GetComplianceDetailRequest;
}
export declare class GetComplianceDetailResponse extends SpeakeasyBase {
    contentType: string;
    getComplianceDetailResponse?: shared.GetComplianceDetailResponse;
    internalErrorException?: any;
    invalidInputException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
