import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteSubnetActionEnum {
    DeleteSubnet = "DeleteSubnet"
}
export declare enum PostDeleteSubnetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteSubnetQueryParams extends SpeakeasyBase {
    action: PostDeleteSubnetActionEnum;
    version: PostDeleteSubnetVersionEnum;
}
export declare class PostDeleteSubnetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSubnetRequest extends SpeakeasyBase {
    queryParams: PostDeleteSubnetQueryParams;
    headers: PostDeleteSubnetHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSubnetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
