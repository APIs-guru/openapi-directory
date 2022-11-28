import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TagResource20181105OperationEnum {
    Tag = "Tag"
}
export declare class TagResource20181105QueryParams extends SpeakeasyBase {
    operation: TagResource20181105OperationEnum;
    resource: string;
}
export declare class TagResource20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResource20181105Request extends SpeakeasyBase {
    queryParams: TagResource20181105QueryParams;
    headers: TagResource20181105Headers;
    request: Uint8Array;
}
export declare class TagResource20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
