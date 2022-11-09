import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostExitStandbyActionEnum {
    ExitStandby = "ExitStandby"
}
export declare enum PostExitStandbyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostExitStandbyQueryParams extends SpeakeasyBase {
    action: PostExitStandbyActionEnum;
    version: PostExitStandbyVersionEnum;
}
export declare class PostExitStandbyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostExitStandbyRequest extends SpeakeasyBase {
    queryParams: PostExitStandbyQueryParams;
    headers: PostExitStandbyHeaders;
    request?: Uint8Array;
}
export declare class PostExitStandbyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
