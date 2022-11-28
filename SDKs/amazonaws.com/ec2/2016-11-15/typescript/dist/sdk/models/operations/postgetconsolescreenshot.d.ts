import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetConsoleScreenshotActionEnum {
    GetConsoleScreenshot = "GetConsoleScreenshot"
}
export declare enum PostGetConsoleScreenshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetConsoleScreenshotQueryParams extends SpeakeasyBase {
    action: PostGetConsoleScreenshotActionEnum;
    version: PostGetConsoleScreenshotVersionEnum;
}
export declare class PostGetConsoleScreenshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetConsoleScreenshotRequest extends SpeakeasyBase {
    queryParams: PostGetConsoleScreenshotQueryParams;
    headers: PostGetConsoleScreenshotHeaders;
    request?: Uint8Array;
}
export declare class PostGetConsoleScreenshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
