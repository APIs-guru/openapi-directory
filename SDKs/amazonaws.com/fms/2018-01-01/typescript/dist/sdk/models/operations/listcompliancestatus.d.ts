import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListComplianceStatusQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListComplianceStatusXAmzTargetEnum {
    Awsfms20180101ListComplianceStatus = "AWSFMS_20180101.ListComplianceStatus"
}
export declare class ListComplianceStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListComplianceStatusXAmzTargetEnum;
}
export declare class ListComplianceStatusRequest extends SpeakeasyBase {
    queryParams: ListComplianceStatusQueryParams;
    headers: ListComplianceStatusHeaders;
    request: shared.ListComplianceStatusRequest;
}
export declare class ListComplianceStatusResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    listComplianceStatusResponse?: shared.ListComplianceStatusResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
