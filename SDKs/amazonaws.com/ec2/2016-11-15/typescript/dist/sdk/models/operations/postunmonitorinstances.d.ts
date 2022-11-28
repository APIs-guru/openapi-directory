import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUnmonitorInstancesActionEnum {
    UnmonitorInstances = "UnmonitorInstances"
}
export declare enum PostUnmonitorInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostUnmonitorInstancesQueryParams extends SpeakeasyBase {
    action: PostUnmonitorInstancesActionEnum;
    version: PostUnmonitorInstancesVersionEnum;
}
export declare class PostUnmonitorInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUnmonitorInstancesRequest extends SpeakeasyBase {
    queryParams: PostUnmonitorInstancesQueryParams;
    headers: PostUnmonitorInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostUnmonitorInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
