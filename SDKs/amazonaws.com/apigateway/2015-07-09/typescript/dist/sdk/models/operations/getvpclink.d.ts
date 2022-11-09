import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVpcLinkPathParams extends SpeakeasyBase {
    vpclinkId: string;
}
export declare class GetVpcLinkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetVpcLinkRequest extends SpeakeasyBase {
    pathParams: GetVpcLinkPathParams;
    headers: GetVpcLinkHeaders;
}
export declare class GetVpcLinkResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    vpcLink?: shared.VpcLink;
}
