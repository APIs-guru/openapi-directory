import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListSshPublicKeysActionEnum {
    ListSshPublicKeys = "ListSSHPublicKeys"
}
export declare enum GetListSshPublicKeysVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListSshPublicKeysQueryParams extends SpeakeasyBase {
    action: GetListSshPublicKeysActionEnum;
    marker?: string;
    maxItems?: number;
    userName?: string;
    version: GetListSshPublicKeysVersionEnum;
}
export declare class GetListSshPublicKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListSshPublicKeysRequest extends SpeakeasyBase {
    queryParams: GetListSshPublicKeysQueryParams;
    headers: GetListSshPublicKeysHeaders;
}
export declare class GetListSshPublicKeysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
