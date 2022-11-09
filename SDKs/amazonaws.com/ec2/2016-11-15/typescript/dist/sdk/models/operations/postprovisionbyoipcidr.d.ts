import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostProvisionByoipCidrActionEnum {
    ProvisionByoipCidr = "ProvisionByoipCidr"
}
export declare enum PostProvisionByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostProvisionByoipCidrQueryParams extends SpeakeasyBase {
    action: PostProvisionByoipCidrActionEnum;
    version: PostProvisionByoipCidrVersionEnum;
}
export declare class PostProvisionByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostProvisionByoipCidrRequest extends SpeakeasyBase {
    queryParams: PostProvisionByoipCidrQueryParams;
    headers: PostProvisionByoipCidrHeaders;
    request?: Uint8Array;
}
export declare class PostProvisionByoipCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
