import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UntagResource20180618OperationEnum {
    Untag = "Untag"
}
export declare class UntagResource20180618QueryParams extends SpeakeasyBase {
    operation: UntagResource20180618OperationEnum;
    resource: string;
}
export declare class UntagResource20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResource20180618Request extends SpeakeasyBase {
    queryParams: UntagResource20180618QueryParams;
    headers: UntagResource20180618Headers;
    request: Uint8Array;
}
export declare class UntagResource20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
