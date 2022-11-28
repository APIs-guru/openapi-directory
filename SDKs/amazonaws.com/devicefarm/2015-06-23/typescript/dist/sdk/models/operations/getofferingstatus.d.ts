import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingStatusQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum GetOfferingStatusXAmzTargetEnum {
    DeviceFarm20150623GetOfferingStatus = "DeviceFarm_20150623.GetOfferingStatus"
}
export declare class GetOfferingStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOfferingStatusXAmzTargetEnum;
}
export declare class GetOfferingStatusRequest extends SpeakeasyBase {
    queryParams: GetOfferingStatusQueryParams;
    headers: GetOfferingStatusHeaders;
    request: shared.GetOfferingStatusRequest;
}
export declare class GetOfferingStatusResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getOfferingStatusResult?: shared.GetOfferingStatusResult;
    limitExceededException?: any;
    notEligibleException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
