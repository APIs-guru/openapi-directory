import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateClusterVersionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class UpdateClusterVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateClusterVersionRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    version: string;
}
export declare class UpdateClusterVersionRequest extends SpeakeasyBase {
    pathParams: UpdateClusterVersionPathParams;
    headers: UpdateClusterVersionHeaders;
    request: UpdateClusterVersionRequestBody;
}
export declare class UpdateClusterVersionResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    updateClusterVersionResponse?: shared.UpdateClusterVersionResponse;
}
