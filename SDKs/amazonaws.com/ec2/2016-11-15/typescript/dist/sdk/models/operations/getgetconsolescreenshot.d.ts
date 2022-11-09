import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetConsoleScreenshotActionEnum {
    GetConsoleScreenshot = "GetConsoleScreenshot"
}
export declare enum GetGetConsoleScreenshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetConsoleScreenshotQueryParams extends SpeakeasyBase {
    action: GetGetConsoleScreenshotActionEnum;
    dryRun?: boolean;
    instanceId: string;
    version: GetGetConsoleScreenshotVersionEnum;
    wakeUp?: boolean;
}
export declare class GetGetConsoleScreenshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetConsoleScreenshotRequest extends SpeakeasyBase {
    queryParams: GetGetConsoleScreenshotQueryParams;
    headers: GetGetConsoleScreenshotHeaders;
}
export declare class GetGetConsoleScreenshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
