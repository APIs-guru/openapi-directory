import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssociatedRolePathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetAssociatedRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociatedRoleRequest extends SpeakeasyBase {
    pathParams: GetAssociatedRolePathParams;
    headers: GetAssociatedRoleHeaders;
}
export declare class GetAssociatedRoleResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getAssociatedRoleResponse?: shared.GetAssociatedRoleResponse;
    internalServerErrorException?: any;
    statusCode: number;
}
