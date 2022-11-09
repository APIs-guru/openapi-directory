import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetGroupActionEnum {
    GetGroup = "GetGroup"
}
export declare enum GetGetGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetGroupQueryParams extends SpeakeasyBase {
    action: GetGetGroupActionEnum;
    groupName: string;
    marker?: string;
    maxItems?: number;
    version: GetGetGroupVersionEnum;
}
export declare class GetGetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetGroupRequest extends SpeakeasyBase {
    queryParams: GetGetGroupQueryParams;
    headers: GetGetGroupHeaders;
}
export declare class GetGetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
