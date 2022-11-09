import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStartVpcEndpointServicePrivateDnsVerificationActionEnum {
    StartVpcEndpointServicePrivateDnsVerification = "StartVpcEndpointServicePrivateDnsVerification"
}
export declare enum GetStartVpcEndpointServicePrivateDnsVerificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetStartVpcEndpointServicePrivateDnsVerificationQueryParams extends SpeakeasyBase {
    action: GetStartVpcEndpointServicePrivateDnsVerificationActionEnum;
    dryRun?: boolean;
    serviceId: string;
    version: GetStartVpcEndpointServicePrivateDnsVerificationVersionEnum;
}
export declare class GetStartVpcEndpointServicePrivateDnsVerificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStartVpcEndpointServicePrivateDnsVerificationRequest extends SpeakeasyBase {
    queryParams: GetStartVpcEndpointServicePrivateDnsVerificationQueryParams;
    headers: GetStartVpcEndpointServicePrivateDnsVerificationHeaders;
}
export declare class GetStartVpcEndpointServicePrivateDnsVerificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
