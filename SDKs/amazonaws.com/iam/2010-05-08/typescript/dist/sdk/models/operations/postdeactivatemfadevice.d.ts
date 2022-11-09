import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeactivateMfaDeviceActionEnum {
    DeactivateMfaDevice = "DeactivateMFADevice"
}
export declare enum PostDeactivateMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeactivateMfaDeviceQueryParams extends SpeakeasyBase {
    action: PostDeactivateMfaDeviceActionEnum;
    version: PostDeactivateMfaDeviceVersionEnum;
}
export declare class PostDeactivateMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeactivateMfaDeviceRequest extends SpeakeasyBase {
    queryParams: PostDeactivateMfaDeviceQueryParams;
    headers: PostDeactivateMfaDeviceHeaders;
    request?: Uint8Array;
}
export declare class PostDeactivateMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
