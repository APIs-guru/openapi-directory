import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateVpcLinkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateVpcLinkRequestBody extends SpeakeasyBase {
    description?: string;
    name: string;
    tags?: Map<string, string>;
    targetArns: string[];
}
export declare class CreateVpcLinkRequest extends SpeakeasyBase {
    headers: CreateVpcLinkHeaders;
    request: CreateVpcLinkRequestBody;
}
export declare class CreateVpcLinkResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    vpcLink?: shared.VpcLink;
}
