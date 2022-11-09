import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum UntagResource20200531OperationEnum {
    Untag = "Untag"
}
export declare class UntagResource20200531QueryParams extends SpeakeasyBase {
    operation: UntagResource20200531OperationEnum;
    resource: string;
}
export declare class UntagResource20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResource20200531Request extends SpeakeasyBase {
    queryParams: UntagResource20200531QueryParams;
    headers: UntagResource20200531Headers;
    request: Uint8Array;
}
export declare class UntagResource20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
