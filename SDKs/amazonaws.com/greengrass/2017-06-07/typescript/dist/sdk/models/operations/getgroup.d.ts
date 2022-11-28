import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGroupRequest extends SpeakeasyBase {
    pathParams: GetGroupPathParams;
    headers: GetGroupHeaders;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getGroupResponse?: shared.GetGroupResponse;
    statusCode: number;
}
