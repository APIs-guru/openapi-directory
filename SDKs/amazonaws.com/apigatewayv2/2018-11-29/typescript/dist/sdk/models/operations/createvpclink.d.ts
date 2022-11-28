import { SpeakeasyBase } from "../../../internal/utils";
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
    name: string;
    securityGroupIds?: string[];
    subnetIds: string[];
    tags?: Map<string, string>;
}
export declare class CreateVpcLinkRequest extends SpeakeasyBase {
    headers: CreateVpcLinkHeaders;
    request: CreateVpcLinkRequestBody;
}
export declare class CreateVpcLinkResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createVpcLinkResponse?: shared.CreateVpcLinkResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
