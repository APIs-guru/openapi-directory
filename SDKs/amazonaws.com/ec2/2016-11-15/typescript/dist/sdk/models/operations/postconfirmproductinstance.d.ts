import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostConfirmProductInstanceActionEnum {
    ConfirmProductInstance = "ConfirmProductInstance"
}
export declare enum PostConfirmProductInstanceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostConfirmProductInstanceQueryParams extends SpeakeasyBase {
    action: PostConfirmProductInstanceActionEnum;
    version: PostConfirmProductInstanceVersionEnum;
}
export declare class PostConfirmProductInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostConfirmProductInstanceRequest extends SpeakeasyBase {
    queryParams: PostConfirmProductInstanceQueryParams;
    headers: PostConfirmProductInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostConfirmProductInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
