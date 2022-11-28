import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVpcLinkPathParams extends SpeakeasyBase {
    vpcLinkId: string;
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
    contentType: string;
    getVpcLinkResponse?: shared.GetVpcLinkResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
