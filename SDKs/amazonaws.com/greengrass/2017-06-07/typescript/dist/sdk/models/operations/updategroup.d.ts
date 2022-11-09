import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class UpdateGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateGroupRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateGroupRequest extends SpeakeasyBase {
    pathParams: UpdateGroupPathParams;
    headers: UpdateGroupHeaders;
    request: UpdateGroupRequestBody;
}
export declare class UpdateGroupResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    updateGroupResponse?: Map<string, any>;
}
