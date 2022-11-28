import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteTrafficMirrorFilterActionEnum {
    DeleteTrafficMirrorFilter = "DeleteTrafficMirrorFilter"
}
export declare enum PostDeleteTrafficMirrorFilterVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTrafficMirrorFilterQueryParams extends SpeakeasyBase {
    action: PostDeleteTrafficMirrorFilterActionEnum;
    version: PostDeleteTrafficMirrorFilterVersionEnum;
}
export declare class PostDeleteTrafficMirrorFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTrafficMirrorFilterRequest extends SpeakeasyBase {
    queryParams: PostDeleteTrafficMirrorFilterQueryParams;
    headers: PostDeleteTrafficMirrorFilterHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTrafficMirrorFilterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
