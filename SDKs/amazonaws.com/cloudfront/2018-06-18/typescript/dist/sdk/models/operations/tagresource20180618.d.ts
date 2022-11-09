import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TagResource20180618OperationEnum {
    Tag = "Tag"
}
export declare class TagResource20180618QueryParams extends SpeakeasyBase {
    operation: TagResource20180618OperationEnum;
    resource: string;
}
export declare class TagResource20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResource20180618Request extends SpeakeasyBase {
    queryParams: TagResource20180618QueryParams;
    headers: TagResource20180618Headers;
    request: Uint8Array;
}
export declare class TagResource20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
