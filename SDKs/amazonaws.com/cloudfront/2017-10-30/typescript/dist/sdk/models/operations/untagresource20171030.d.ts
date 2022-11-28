import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UntagResource20171030OperationEnum {
    Untag = "Untag"
}
export declare class UntagResource20171030QueryParams extends SpeakeasyBase {
    operation: UntagResource20171030OperationEnum;
    resource: string;
}
export declare class UntagResource20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResource20171030Request extends SpeakeasyBase {
    queryParams: UntagResource20171030QueryParams;
    headers: UntagResource20171030Headers;
    request: Uint8Array;
}
export declare class UntagResource20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
