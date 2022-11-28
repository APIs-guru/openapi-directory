import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteNetworkAclActionEnum {
    DeleteNetworkAcl = "DeleteNetworkAcl"
}
export declare enum GetDeleteNetworkAclVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteNetworkAclQueryParams extends SpeakeasyBase {
    action: GetDeleteNetworkAclActionEnum;
    dryRun?: boolean;
    networkAclId: string;
    version: GetDeleteNetworkAclVersionEnum;
}
export declare class GetDeleteNetworkAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteNetworkAclRequest extends SpeakeasyBase {
    queryParams: GetDeleteNetworkAclQueryParams;
    headers: GetDeleteNetworkAclHeaders;
}
export declare class GetDeleteNetworkAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
