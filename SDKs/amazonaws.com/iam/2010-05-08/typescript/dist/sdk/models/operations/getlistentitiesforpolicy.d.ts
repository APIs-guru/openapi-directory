import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListEntitiesForPolicyActionEnum {
    ListEntitiesForPolicy = "ListEntitiesForPolicy"
}
export declare enum GetListEntitiesForPolicyEntityFilterEnum {
    User = "User",
    Role = "Role",
    Group = "Group",
    LocalManagedPolicy = "LocalManagedPolicy",
    AwsManagedPolicy = "AWSManagedPolicy"
}
export declare enum GetListEntitiesForPolicyPolicyUsageFilterEnum {
    PermissionsPolicy = "PermissionsPolicy",
    PermissionsBoundary = "PermissionsBoundary"
}
export declare enum GetListEntitiesForPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListEntitiesForPolicyQueryParams extends SpeakeasyBase {
    action: GetListEntitiesForPolicyActionEnum;
    entityFilter?: GetListEntitiesForPolicyEntityFilterEnum;
    marker?: string;
    maxItems?: number;
    pathPrefix?: string;
    policyArn: string;
    policyUsageFilter?: GetListEntitiesForPolicyPolicyUsageFilterEnum;
    version: GetListEntitiesForPolicyVersionEnum;
}
export declare class GetListEntitiesForPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListEntitiesForPolicyRequest extends SpeakeasyBase {
    queryParams: GetListEntitiesForPolicyQueryParams;
    headers: GetListEntitiesForPolicyHeaders;
}
export declare class GetListEntitiesForPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
