import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteNetworkAclEntryActionEnum {
    DeleteNetworkAclEntry = "DeleteNetworkAclEntry"
}
export declare enum GetDeleteNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteNetworkAclEntryQueryParams extends SpeakeasyBase {
    action: GetDeleteNetworkAclEntryActionEnum;
    dryRun?: boolean;
    egress: boolean;
    networkAclId: string;
    ruleNumber: number;
    version: GetDeleteNetworkAclEntryVersionEnum;
}
export declare class GetDeleteNetworkAclEntryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteNetworkAclEntryRequest extends SpeakeasyBase {
    queryParams: GetDeleteNetworkAclEntryQueryParams;
    headers: GetDeleteNetworkAclEntryHeaders;
}
export declare class GetDeleteNetworkAclEntryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
