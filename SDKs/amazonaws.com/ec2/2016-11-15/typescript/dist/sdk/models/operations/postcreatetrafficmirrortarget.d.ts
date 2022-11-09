import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateTrafficMirrorTargetActionEnum {
    CreateTrafficMirrorTarget = "CreateTrafficMirrorTarget"
}
export declare enum PostCreateTrafficMirrorTargetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTrafficMirrorTargetQueryParams extends SpeakeasyBase {
    action: PostCreateTrafficMirrorTargetActionEnum;
    version: PostCreateTrafficMirrorTargetVersionEnum;
}
export declare class PostCreateTrafficMirrorTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTrafficMirrorTargetRequest extends SpeakeasyBase {
    queryParams: PostCreateTrafficMirrorTargetQueryParams;
    headers: PostCreateTrafficMirrorTargetHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTrafficMirrorTargetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
