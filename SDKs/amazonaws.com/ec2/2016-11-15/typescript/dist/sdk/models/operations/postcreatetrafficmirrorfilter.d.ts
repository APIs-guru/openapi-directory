import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateTrafficMirrorFilterActionEnum {
    CreateTrafficMirrorFilter = "CreateTrafficMirrorFilter"
}
export declare enum PostCreateTrafficMirrorFilterVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTrafficMirrorFilterQueryParams extends SpeakeasyBase {
    action: PostCreateTrafficMirrorFilterActionEnum;
    version: PostCreateTrafficMirrorFilterVersionEnum;
}
export declare class PostCreateTrafficMirrorFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTrafficMirrorFilterRequest extends SpeakeasyBase {
    queryParams: PostCreateTrafficMirrorFilterQueryParams;
    headers: PostCreateTrafficMirrorFilterHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTrafficMirrorFilterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
