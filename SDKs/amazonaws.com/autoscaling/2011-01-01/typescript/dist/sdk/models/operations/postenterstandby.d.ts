import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostEnterStandbyActionEnum {
    EnterStandby = "EnterStandby"
}
export declare enum PostEnterStandbyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostEnterStandbyQueryParams extends SpeakeasyBase {
    action: PostEnterStandbyActionEnum;
    version: PostEnterStandbyVersionEnum;
}
export declare class PostEnterStandbyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnterStandbyRequest extends SpeakeasyBase {
    queryParams: PostEnterStandbyQueryParams;
    headers: PostEnterStandbyHeaders;
    request?: Uint8Array;
}
export declare class PostEnterStandbyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
