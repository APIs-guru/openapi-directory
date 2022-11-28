import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetDesiredCapacityActionEnum {
    SetDesiredCapacity = "SetDesiredCapacity"
}
export declare enum PostSetDesiredCapacityVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostSetDesiredCapacityQueryParams extends SpeakeasyBase {
    action: PostSetDesiredCapacityActionEnum;
    version: PostSetDesiredCapacityVersionEnum;
}
export declare class PostSetDesiredCapacityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetDesiredCapacityRequest extends SpeakeasyBase {
    queryParams: PostSetDesiredCapacityQueryParams;
    headers: PostSetDesiredCapacityHeaders;
    request?: Uint8Array;
}
export declare class PostSetDesiredCapacityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
