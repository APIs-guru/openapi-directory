import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyUserActionEnum {
    ModifyUser = "ModifyUser"
}
export declare enum GetModifyUserVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetModifyUserQueryParams extends SpeakeasyBase {
    accessString?: string;
    action: GetModifyUserActionEnum;
    appendAccessString?: string;
    noPasswordRequired?: boolean;
    passwords?: string[];
    userId: string;
    version: GetModifyUserVersionEnum;
}
export declare class GetModifyUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyUserRequest extends SpeakeasyBase {
    queryParams: GetModifyUserQueryParams;
    headers: GetModifyUserHeaders;
}
export declare class GetModifyUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
