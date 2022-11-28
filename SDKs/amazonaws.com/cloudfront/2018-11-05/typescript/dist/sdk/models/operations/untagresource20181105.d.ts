import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UntagResource20181105OperationEnum {
    Untag = "Untag"
}
export declare class UntagResource20181105QueryParams extends SpeakeasyBase {
    operation: UntagResource20181105OperationEnum;
    resource: string;
}
export declare class UntagResource20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResource20181105Request extends SpeakeasyBase {
    queryParams: UntagResource20181105QueryParams;
    headers: UntagResource20181105Headers;
    request: Uint8Array;
}
export declare class UntagResource20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
