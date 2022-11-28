import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSendDiagnosticInterruptActionEnum {
    SendDiagnosticInterrupt = "SendDiagnosticInterrupt"
}
export declare enum PostSendDiagnosticInterruptVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostSendDiagnosticInterruptQueryParams extends SpeakeasyBase {
    action: PostSendDiagnosticInterruptActionEnum;
    version: PostSendDiagnosticInterruptVersionEnum;
}
export declare class PostSendDiagnosticInterruptHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSendDiagnosticInterruptRequest extends SpeakeasyBase {
    queryParams: PostSendDiagnosticInterruptQueryParams;
    headers: PostSendDiagnosticInterruptHeaders;
    request?: Uint8Array;
}
export declare class PostSendDiagnosticInterruptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
