import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVpcLinksQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetVpcLinksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetVpcLinksRequest extends SpeakeasyBase {
    queryParams: GetVpcLinksQueryParams;
    headers: GetVpcLinksHeaders;
}
export declare class GetVpcLinksResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    vpcLinks?: shared.VpcLinks;
}
