import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAssociateDhcpOptionsActionEnum {
    AssociateDhcpOptions = "AssociateDhcpOptions"
}
export declare enum GetAssociateDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateDhcpOptionsQueryParams extends SpeakeasyBase {
    action: GetAssociateDhcpOptionsActionEnum;
    dhcpOptionsId: string;
    dryRun?: boolean;
    version: GetAssociateDhcpOptionsVersionEnum;
    vpcId: string;
}
export declare class GetAssociateDhcpOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateDhcpOptionsRequest extends SpeakeasyBase {
    queryParams: GetAssociateDhcpOptionsQueryParams;
    headers: GetAssociateDhcpOptionsHeaders;
}
export declare class GetAssociateDhcpOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
