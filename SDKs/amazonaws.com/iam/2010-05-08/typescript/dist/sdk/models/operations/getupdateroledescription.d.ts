import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateRoleDescriptionActionEnum {
    UpdateRoleDescription = "UpdateRoleDescription"
}
export declare enum GetUpdateRoleDescriptionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateRoleDescriptionQueryParams extends SpeakeasyBase {
    action: GetUpdateRoleDescriptionActionEnum;
    description: string;
    roleName: string;
    version: GetUpdateRoleDescriptionVersionEnum;
}
export declare class GetUpdateRoleDescriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateRoleDescriptionRequest extends SpeakeasyBase {
    queryParams: GetUpdateRoleDescriptionQueryParams;
    headers: GetUpdateRoleDescriptionHeaders;
}
export declare class GetUpdateRoleDescriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
