import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteAppPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class DeleteAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAppRequest extends SpeakeasyBase {
    pathParams: DeleteAppPathParams;
    headers: DeleteAppHeaders;
}
export declare class DeleteAppResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteAppResult?: shared.DeleteAppResult;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
