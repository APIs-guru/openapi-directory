import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateSubnetActionEnum {
    CreateSubnet = "CreateSubnet"
}
export declare enum PostCreateSubnetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateSubnetQueryParams extends SpeakeasyBase {
    action: PostCreateSubnetActionEnum;
    version: PostCreateSubnetVersionEnum;
}
export declare class PostCreateSubnetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateSubnetRequest extends SpeakeasyBase {
    queryParams: PostCreateSubnetQueryParams;
    headers: PostCreateSubnetHeaders;
    request?: Uint8Array;
}
export declare class PostCreateSubnetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
