import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisassociateAddressActionEnum {
    DisassociateAddress = "DisassociateAddress"
}
export declare enum GetDisassociateAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisassociateAddressQueryParams extends SpeakeasyBase {
    action: GetDisassociateAddressActionEnum;
    associationId?: string;
    dryRun?: boolean;
    publicIp?: string;
    version: GetDisassociateAddressVersionEnum;
}
export declare class GetDisassociateAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateAddressRequest extends SpeakeasyBase {
    queryParams: GetDisassociateAddressQueryParams;
    headers: GetDisassociateAddressHeaders;
}
export declare class GetDisassociateAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
