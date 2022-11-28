import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateStorageLocationActionEnum {
    CreateStorageLocation = "CreateStorageLocation"
}
export declare enum PostCreateStorageLocationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateStorageLocationQueryParams extends SpeakeasyBase {
    action: PostCreateStorageLocationActionEnum;
    version: PostCreateStorageLocationVersionEnum;
}
export declare class PostCreateStorageLocationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateStorageLocationRequest extends SpeakeasyBase {
    queryParams: PostCreateStorageLocationQueryParams;
    headers: PostCreateStorageLocationHeaders;
}
export declare class PostCreateStorageLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
