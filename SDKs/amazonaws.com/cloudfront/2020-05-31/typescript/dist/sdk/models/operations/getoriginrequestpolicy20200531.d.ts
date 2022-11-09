import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetOriginRequestPolicy20200531PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetOriginRequestPolicy20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetOriginRequestPolicy20200531Request extends SpeakeasyBase {
    pathParams: GetOriginRequestPolicy20200531PathParams;
    headers: GetOriginRequestPolicy20200531Headers;
}
export declare class GetOriginRequestPolicy20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
