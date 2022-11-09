import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisassociateEnvironmentOperationsRoleActionEnum {
    DisassociateEnvironmentOperationsRole = "DisassociateEnvironmentOperationsRole"
}
export declare enum PostDisassociateEnvironmentOperationsRoleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDisassociateEnvironmentOperationsRoleQueryParams extends SpeakeasyBase {
    action: PostDisassociateEnvironmentOperationsRoleActionEnum;
    version: PostDisassociateEnvironmentOperationsRoleVersionEnum;
}
export declare class PostDisassociateEnvironmentOperationsRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateEnvironmentOperationsRoleRequest extends SpeakeasyBase {
    queryParams: PostDisassociateEnvironmentOperationsRoleQueryParams;
    headers: PostDisassociateEnvironmentOperationsRoleHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateEnvironmentOperationsRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
