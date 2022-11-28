import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteConnectionPathParams extends SpeakeasyBase {
    connectionId: string;
}
export declare class DeleteConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteConnectionRequest extends SpeakeasyBase {
    pathParams: DeleteConnectionPathParams;
    headers: DeleteConnectionHeaders;
}
export declare class DeleteConnectionResponse extends SpeakeasyBase {
    contentType: string;
    forbiddenException?: any;
    goneException?: any;
    limitExceededException?: any;
    statusCode: number;
}
