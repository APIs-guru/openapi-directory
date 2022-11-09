import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInvalidation20200531PathParams extends SpeakeasyBase {
    distributionId: string;
    id: string;
}
export declare class GetInvalidation20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInvalidation20200531Request extends SpeakeasyBase {
    pathParams: GetInvalidation20200531PathParams;
    headers: GetInvalidation20200531Headers;
}
export declare class GetInvalidation20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
