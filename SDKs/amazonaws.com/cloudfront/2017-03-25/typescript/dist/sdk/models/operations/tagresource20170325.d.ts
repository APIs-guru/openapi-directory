import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TagResource20170325OperationEnum {
    Tag = "Tag"
}
export declare class TagResource20170325QueryParams extends SpeakeasyBase {
    operation: TagResource20170325OperationEnum;
    resource: string;
}
export declare class TagResource20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResource20170325Request extends SpeakeasyBase {
    queryParams: TagResource20170325QueryParams;
    headers: TagResource20170325Headers;
    request: Uint8Array;
}
export declare class TagResource20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
