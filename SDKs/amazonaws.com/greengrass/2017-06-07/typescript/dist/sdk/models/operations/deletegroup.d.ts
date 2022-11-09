import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class DeleteGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteGroupRequest extends SpeakeasyBase {
    pathParams: DeleteGroupPathParams;
    headers: DeleteGroupHeaders;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteGroupResponse?: Map<string, any>;
    statusCode: number;
}
