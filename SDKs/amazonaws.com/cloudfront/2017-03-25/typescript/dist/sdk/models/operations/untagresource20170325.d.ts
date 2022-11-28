import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UntagResource20170325OperationEnum {
    Untag = "Untag"
}
export declare class UntagResource20170325QueryParams extends SpeakeasyBase {
    operation: UntagResource20170325OperationEnum;
    resource: string;
}
export declare class UntagResource20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResource20170325Request extends SpeakeasyBase {
    queryParams: UntagResource20170325QueryParams;
    headers: UntagResource20170325Headers;
    request: Uint8Array;
}
export declare class UntagResource20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
