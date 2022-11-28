import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteVpcLinkPathParams extends SpeakeasyBase {
    vpclinkId: string;
}
export declare class DeleteVpcLinkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteVpcLinkRequest extends SpeakeasyBase {
    pathParams: DeleteVpcLinkPathParams;
    headers: DeleteVpcLinkHeaders;
}
export declare class DeleteVpcLinkResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
