import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetComplianceDetailsByResourceQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum GetComplianceDetailsByResourceXAmzTargetEnum {
    StarlingDoveServiceGetComplianceDetailsByResource = "StarlingDoveService.GetComplianceDetailsByResource"
}
export declare class GetComplianceDetailsByResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceDetailsByResourceXAmzTargetEnum;
}
export declare class GetComplianceDetailsByResourceRequest extends SpeakeasyBase {
    queryParams: GetComplianceDetailsByResourceQueryParams;
    headers: GetComplianceDetailsByResourceHeaders;
    request: shared.GetComplianceDetailsByResourceRequest;
}
export declare class GetComplianceDetailsByResourceResponse extends SpeakeasyBase {
    contentType: string;
    getComplianceDetailsByResourceResponse?: shared.GetComplianceDetailsByResourceResponse;
    invalidParameterValueException?: any;
    statusCode: number;
}
