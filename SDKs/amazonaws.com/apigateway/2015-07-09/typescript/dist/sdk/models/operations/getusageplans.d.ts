import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsagePlansQueryParams extends SpeakeasyBase {
    keyId?: string;
    limit?: number;
    position?: string;
}
export declare class GetUsagePlansHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUsagePlansRequest extends SpeakeasyBase {
    queryParams: GetUsagePlansQueryParams;
    headers: GetUsagePlansHeaders;
}
export declare class GetUsagePlansResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    usagePlans?: shared.UsagePlans;
}
