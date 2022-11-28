import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConnectionPathParams extends SpeakeasyBase {
    connectionId: string;
}
export declare class GetConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetConnectionRequest extends SpeakeasyBase {
    pathParams: GetConnectionPathParams;
    headers: GetConnectionHeaders;
}
export declare class GetConnectionResponse extends SpeakeasyBase {
    contentType: string;
    forbiddenException?: any;
    getConnectionResponse?: shared.GetConnectionResponse;
    goneException?: any;
    limitExceededException?: any;
    statusCode: number;
}
