import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRestartAppServerActionEnum {
    RestartAppServer = "RestartAppServer"
}
export declare enum PostRestartAppServerVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostRestartAppServerQueryParams extends SpeakeasyBase {
    action: PostRestartAppServerActionEnum;
    version: PostRestartAppServerVersionEnum;
}
export declare class PostRestartAppServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestartAppServerRequest extends SpeakeasyBase {
    queryParams: PostRestartAppServerQueryParams;
    headers: PostRestartAppServerHeaders;
    request?: Uint8Array;
}
export declare class PostRestartAppServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
