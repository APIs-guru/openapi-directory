import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetSerialConsoleAccessStatusActionEnum {
    GetSerialConsoleAccessStatus = "GetSerialConsoleAccessStatus"
}
export declare enum PostGetSerialConsoleAccessStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetSerialConsoleAccessStatusQueryParams extends SpeakeasyBase {
    action: PostGetSerialConsoleAccessStatusActionEnum;
    version: PostGetSerialConsoleAccessStatusVersionEnum;
}
export declare class PostGetSerialConsoleAccessStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetSerialConsoleAccessStatusRequest extends SpeakeasyBase {
    queryParams: PostGetSerialConsoleAccessStatusQueryParams;
    headers: PostGetSerialConsoleAccessStatusHeaders;
    request?: Uint8Array;
}
export declare class PostGetSerialConsoleAccessStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
