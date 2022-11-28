import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInvalidation20180618PathParams extends SpeakeasyBase {
    distributionId: string;
    id: string;
}
export declare class GetInvalidation20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInvalidation20180618Request extends SpeakeasyBase {
    pathParams: GetInvalidation20180618PathParams;
    headers: GetInvalidation20180618Headers;
}
export declare class GetInvalidation20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
