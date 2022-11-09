import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateInvalidation20180618PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class CreateInvalidation20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateInvalidation20180618Request extends SpeakeasyBase {
    pathParams: CreateInvalidation20180618PathParams;
    headers: CreateInvalidation20180618Headers;
    request: Uint8Array;
}
export declare class CreateInvalidation20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
