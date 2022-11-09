import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyDbInstanceActionEnum {
    ModifyDbInstance = "ModifyDBInstance"
}
export declare enum GetModifyDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyDbInstanceQueryParams extends SpeakeasyBase {
    action: GetModifyDbInstanceActionEnum;
    applyImmediately?: boolean;
    autoMinorVersionUpgrade?: boolean;
    caCertificateIdentifier?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    newDbInstanceIdentifier?: string;
    preferredMaintenanceWindow?: string;
    promotionTier?: number;
    version: GetModifyDbInstanceVersionEnum;
}
export declare class GetModifyDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbInstanceRequest extends SpeakeasyBase {
    queryParams: GetModifyDbInstanceQueryParams;
    headers: GetModifyDbInstanceHeaders;
}
export declare class GetModifyDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
