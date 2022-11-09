import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostStartInstancesActionEnum {
    StartInstances = "StartInstances"
}
export declare enum PostStartInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostStartInstancesQueryParams extends SpeakeasyBase {
    action: PostStartInstancesActionEnum;
    version: PostStartInstancesVersionEnum;
}
export declare class PostStartInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStartInstancesRequest extends SpeakeasyBase {
    queryParams: PostStartInstancesQueryParams;
    headers: PostStartInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostStartInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
