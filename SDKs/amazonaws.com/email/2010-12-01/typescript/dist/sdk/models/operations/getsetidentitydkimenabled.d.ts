import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSetIdentityDkimEnabledActionEnum {
    SetIdentityDkimEnabled = "SetIdentityDkimEnabled"
}
export declare enum GetSetIdentityDkimEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetSetIdentityDkimEnabledQueryParams extends SpeakeasyBase {
    action: GetSetIdentityDkimEnabledActionEnum;
    dkimEnabled: boolean;
    identity: string;
    version: GetSetIdentityDkimEnabledVersionEnum;
}
export declare class GetSetIdentityDkimEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetIdentityDkimEnabledRequest extends SpeakeasyBase {
    queryParams: GetSetIdentityDkimEnabledQueryParams;
    headers: GetSetIdentityDkimEnabledHeaders;
}
export declare class GetSetIdentityDkimEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
