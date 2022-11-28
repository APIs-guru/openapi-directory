import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TagResource20171030OperationEnum {
    Tag = "Tag"
}
export declare class TagResource20171030QueryParams extends SpeakeasyBase {
    operation: TagResource20171030OperationEnum;
    resource: string;
}
export declare class TagResource20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResource20171030Request extends SpeakeasyBase {
    queryParams: TagResource20171030QueryParams;
    headers: TagResource20171030Headers;
    request: Uint8Array;
}
export declare class TagResource20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
