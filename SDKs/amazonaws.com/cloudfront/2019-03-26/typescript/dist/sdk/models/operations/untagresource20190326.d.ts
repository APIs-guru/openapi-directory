import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum UntagResource20190326OperationEnum {
    Untag = "Untag"
}
export declare class UntagResource20190326QueryParams extends SpeakeasyBase {
    operation: UntagResource20190326OperationEnum;
    resource: string;
}
export declare class UntagResource20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResource20190326Request extends SpeakeasyBase {
    queryParams: UntagResource20190326QueryParams;
    headers: UntagResource20190326Headers;
    request: Uint8Array;
}
export declare class UntagResource20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
