import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostEnableSerialConsoleAccessActionEnum {
    EnableSerialConsoleAccess = "EnableSerialConsoleAccess"
}
export declare enum PostEnableSerialConsoleAccessVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostEnableSerialConsoleAccessQueryParams extends SpeakeasyBase {
    action: PostEnableSerialConsoleAccessActionEnum;
    version: PostEnableSerialConsoleAccessVersionEnum;
}
export declare class PostEnableSerialConsoleAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableSerialConsoleAccessRequest extends SpeakeasyBase {
    queryParams: PostEnableSerialConsoleAccessQueryParams;
    headers: PostEnableSerialConsoleAccessHeaders;
    request?: Uint8Array;
}
export declare class PostEnableSerialConsoleAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
