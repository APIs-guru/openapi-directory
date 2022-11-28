import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TagResource20161125OperationEnum {
    Tag = "Tag"
}
export declare class TagResource20161125QueryParams extends SpeakeasyBase {
    operation: TagResource20161125OperationEnum;
    resource: string;
}
export declare class TagResource20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResource20161125Request extends SpeakeasyBase {
    queryParams: TagResource20161125QueryParams;
    headers: TagResource20161125Headers;
    request: Uint8Array;
}
export declare class TagResource20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
