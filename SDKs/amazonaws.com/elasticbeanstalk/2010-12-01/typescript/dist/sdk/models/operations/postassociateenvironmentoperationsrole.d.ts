import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssociateEnvironmentOperationsRoleActionEnum {
    AssociateEnvironmentOperationsRole = "AssociateEnvironmentOperationsRole"
}
export declare enum PostAssociateEnvironmentOperationsRoleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostAssociateEnvironmentOperationsRoleQueryParams extends SpeakeasyBase {
    action: PostAssociateEnvironmentOperationsRoleActionEnum;
    version: PostAssociateEnvironmentOperationsRoleVersionEnum;
}
export declare class PostAssociateEnvironmentOperationsRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateEnvironmentOperationsRoleRequest extends SpeakeasyBase {
    queryParams: PostAssociateEnvironmentOperationsRoleQueryParams;
    headers: PostAssociateEnvironmentOperationsRoleHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateEnvironmentOperationsRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
