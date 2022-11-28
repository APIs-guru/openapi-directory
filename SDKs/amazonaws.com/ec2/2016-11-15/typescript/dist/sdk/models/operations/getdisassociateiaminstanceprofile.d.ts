import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisassociateIamInstanceProfileActionEnum {
    DisassociateIamInstanceProfile = "DisassociateIamInstanceProfile"
}
export declare enum GetDisassociateIamInstanceProfileVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisassociateIamInstanceProfileQueryParams extends SpeakeasyBase {
    action: GetDisassociateIamInstanceProfileActionEnum;
    associationId: string;
    version: GetDisassociateIamInstanceProfileVersionEnum;
}
export declare class GetDisassociateIamInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateIamInstanceProfileRequest extends SpeakeasyBase {
    queryParams: GetDisassociateIamInstanceProfileQueryParams;
    headers: GetDisassociateIamInstanceProfileHeaders;
}
export declare class GetDisassociateIamInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
