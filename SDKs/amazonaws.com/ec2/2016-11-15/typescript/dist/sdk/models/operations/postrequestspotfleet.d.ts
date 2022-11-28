import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRequestSpotFleetActionEnum {
    RequestSpotFleet = "RequestSpotFleet"
}
export declare enum PostRequestSpotFleetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRequestSpotFleetQueryParams extends SpeakeasyBase {
    action: PostRequestSpotFleetActionEnum;
    version: PostRequestSpotFleetVersionEnum;
}
export declare class PostRequestSpotFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRequestSpotFleetRequest extends SpeakeasyBase {
    queryParams: PostRequestSpotFleetQueryParams;
    headers: PostRequestSpotFleetHeaders;
    request?: Uint8Array;
}
export declare class PostRequestSpotFleetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
