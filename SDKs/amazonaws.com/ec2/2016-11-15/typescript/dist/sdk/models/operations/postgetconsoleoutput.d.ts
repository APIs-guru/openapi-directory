import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetConsoleOutputActionEnum {
    GetConsoleOutput = "GetConsoleOutput"
}
export declare enum PostGetConsoleOutputVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetConsoleOutputQueryParams extends SpeakeasyBase {
    action: PostGetConsoleOutputActionEnum;
    version: PostGetConsoleOutputVersionEnum;
}
export declare class PostGetConsoleOutputHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetConsoleOutputRequest extends SpeakeasyBase {
    queryParams: PostGetConsoleOutputQueryParams;
    headers: PostGetConsoleOutputHeaders;
    request?: Uint8Array;
}
export declare class PostGetConsoleOutputResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
