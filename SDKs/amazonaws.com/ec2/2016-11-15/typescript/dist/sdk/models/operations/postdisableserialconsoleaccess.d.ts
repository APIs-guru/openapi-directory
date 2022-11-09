import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisableSerialConsoleAccessActionEnum {
    DisableSerialConsoleAccess = "DisableSerialConsoleAccess"
}
export declare enum PostDisableSerialConsoleAccessVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisableSerialConsoleAccessQueryParams extends SpeakeasyBase {
    action: PostDisableSerialConsoleAccessActionEnum;
    version: PostDisableSerialConsoleAccessVersionEnum;
}
export declare class PostDisableSerialConsoleAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableSerialConsoleAccessRequest extends SpeakeasyBase {
    queryParams: PostDisableSerialConsoleAccessQueryParams;
    headers: PostDisableSerialConsoleAccessHeaders;
    request?: Uint8Array;
}
export declare class PostDisableSerialConsoleAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
