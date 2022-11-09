import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateVpcLinkPathParams extends SpeakeasyBase {
    vpclinkId: string;
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
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateVpcLinkRequest extends SpeakeasyBase {
    pathParams: UpdateVpcLinkPathParams;
    headers: UpdateVpcLinkHeaders;
    request: UpdateVpcLinkRequestBody;
}
export declare class UpdateVpcLinkResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    vpcLink?: shared.VpcLink;
}
