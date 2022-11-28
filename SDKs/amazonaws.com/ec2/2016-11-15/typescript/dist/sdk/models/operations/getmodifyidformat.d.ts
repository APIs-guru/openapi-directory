import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyIdFormatActionEnum {
    ModifyIdFormat = "ModifyIdFormat"
}
export declare enum GetModifyIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyIdFormatQueryParams extends SpeakeasyBase {
    action: GetModifyIdFormatActionEnum;
    resource: string;
    useLongIds: boolean;
    version: GetModifyIdFormatVersionEnum;
}
export declare class GetModifyIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyIdFormatRequest extends SpeakeasyBase {
    queryParams: GetModifyIdFormatQueryParams;
    headers: GetModifyIdFormatHeaders;
}
export declare class GetModifyIdFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
