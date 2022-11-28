import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostStartVpcEndpointServicePrivateDnsVerificationActionEnum {
    StartVpcEndpointServicePrivateDnsVerification = "StartVpcEndpointServicePrivateDnsVerification"
}
export declare enum PostStartVpcEndpointServicePrivateDnsVerificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostStartVpcEndpointServicePrivateDnsVerificationQueryParams extends SpeakeasyBase {
    action: PostStartVpcEndpointServicePrivateDnsVerificationActionEnum;
    version: PostStartVpcEndpointServicePrivateDnsVerificationVersionEnum;
}
export declare class PostStartVpcEndpointServicePrivateDnsVerificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStartVpcEndpointServicePrivateDnsVerificationRequest extends SpeakeasyBase {
    queryParams: PostStartVpcEndpointServicePrivateDnsVerificationQueryParams;
    headers: PostStartVpcEndpointServicePrivateDnsVerificationHeaders;
    request?: Uint8Array;
}
export declare class PostStartVpcEndpointServicePrivateDnsVerificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
