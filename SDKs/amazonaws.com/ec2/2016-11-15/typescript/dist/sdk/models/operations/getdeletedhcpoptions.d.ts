import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteDhcpOptionsActionEnum {
    DeleteDhcpOptions = "DeleteDhcpOptions"
}
export declare enum GetDeleteDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteDhcpOptionsQueryParams extends SpeakeasyBase {
    action: GetDeleteDhcpOptionsActionEnum;
    dhcpOptionsId: string;
    dryRun?: boolean;
    version: GetDeleteDhcpOptionsVersionEnum;
}
export declare class GetDeleteDhcpOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDhcpOptionsRequest extends SpeakeasyBase {
    queryParams: GetDeleteDhcpOptionsQueryParams;
    headers: GetDeleteDhcpOptionsHeaders;
}
export declare class GetDeleteDhcpOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
