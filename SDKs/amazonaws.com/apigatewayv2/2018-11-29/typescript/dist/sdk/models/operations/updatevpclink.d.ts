import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVpcLinkPathParams extends SpeakeasyBase {
    vpcLinkId: string;
}
export declare class UpdateVpcLinkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateVpcLinkRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateVpcLinkRequest extends SpeakeasyBase {
    pathParams: UpdateVpcLinkPathParams;
    headers: UpdateVpcLinkHeaders;
    request: UpdateVpcLinkRequestBody;
}
export declare class UpdateVpcLinkResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateVpcLinkResponse?: shared.UpdateVpcLinkResponse;
}
