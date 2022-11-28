import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateDefaultSubnetActionEnum {
    CreateDefaultSubnet = "CreateDefaultSubnet"
}
export declare enum PostCreateDefaultSubnetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateDefaultSubnetQueryParams extends SpeakeasyBase {
    action: PostCreateDefaultSubnetActionEnum;
    version: PostCreateDefaultSubnetVersionEnum;
}
export declare class PostCreateDefaultSubnetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDefaultSubnetRequest extends SpeakeasyBase {
    queryParams: PostCreateDefaultSubnetQueryParams;
    headers: PostCreateDefaultSubnetHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDefaultSubnetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
