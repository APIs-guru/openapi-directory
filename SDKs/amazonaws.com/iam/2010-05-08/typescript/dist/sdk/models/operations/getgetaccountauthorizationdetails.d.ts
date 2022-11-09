import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetGetAccountAuthorizationDetailsActionEnum {
    GetAccountAuthorizationDetails = "GetAccountAuthorizationDetails"
}
export declare enum GetGetAccountAuthorizationDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetAccountAuthorizationDetailsQueryParams extends SpeakeasyBase {
    action: GetGetAccountAuthorizationDetailsActionEnum;
    filter?: shared.EntityTypeEnum[];
    marker?: string;
    maxItems?: number;
    version: GetGetAccountAuthorizationDetailsVersionEnum;
}
export declare class GetGetAccountAuthorizationDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetAccountAuthorizationDetailsRequest extends SpeakeasyBase {
    queryParams: GetGetAccountAuthorizationDetailsQueryParams;
    headers: GetGetAccountAuthorizationDetailsHeaders;
}
export declare class GetGetAccountAuthorizationDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
