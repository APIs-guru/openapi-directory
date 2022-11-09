import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TagResource20200531OperationEnum {
    Tag = "Tag"
}
export declare class TagResource20200531QueryParams extends SpeakeasyBase {
    operation: TagResource20200531OperationEnum;
    resource: string;
}
export declare class TagResource20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResource20200531Request extends SpeakeasyBase {
    queryParams: TagResource20200531QueryParams;
    headers: TagResource20200531Headers;
    request: Uint8Array;
}
export declare class TagResource20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
