import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupVersionPathParams extends SpeakeasyBase {
    groupId: string;
    groupVersionId: string;
}
export declare class GetGroupVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGroupVersionRequest extends SpeakeasyBase {
    pathParams: GetGroupVersionPathParams;
    headers: GetGroupVersionHeaders;
}
export declare class GetGroupVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getGroupVersionResponse?: shared.GetGroupVersionResponse;
    statusCode: number;
}
