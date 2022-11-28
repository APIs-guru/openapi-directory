import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TagResource20190326OperationEnum {
    Tag = "Tag"
}
export declare class TagResource20190326QueryParams extends SpeakeasyBase {
    operation: TagResource20190326OperationEnum;
    resource: string;
}
export declare class TagResource20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResource20190326Request extends SpeakeasyBase {
    queryParams: TagResource20190326QueryParams;
    headers: TagResource20190326Headers;
    request: Uint8Array;
}
export declare class TagResource20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
