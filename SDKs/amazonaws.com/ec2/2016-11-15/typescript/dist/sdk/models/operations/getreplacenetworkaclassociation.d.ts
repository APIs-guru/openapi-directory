import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetReplaceNetworkAclAssociationActionEnum {
    ReplaceNetworkAclAssociation = "ReplaceNetworkAclAssociation"
}
export declare enum GetReplaceNetworkAclAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetReplaceNetworkAclAssociationQueryParams extends SpeakeasyBase {
    action: GetReplaceNetworkAclAssociationActionEnum;
    associationId: string;
    dryRun?: boolean;
    networkAclId: string;
    version: GetReplaceNetworkAclAssociationVersionEnum;
}
export declare class GetReplaceNetworkAclAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReplaceNetworkAclAssociationRequest extends SpeakeasyBase {
    queryParams: GetReplaceNetworkAclAssociationQueryParams;
    headers: GetReplaceNetworkAclAssociationHeaders;
}
export declare class GetReplaceNetworkAclAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
