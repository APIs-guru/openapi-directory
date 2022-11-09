import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateRecordsPathParams extends SpeakeasyBase {
    datasetName: string;
    identityId: string;
    identityPoolId: string;
}
export declare class UpdateRecordsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzClientContext?: string;
}
export declare class UpdateRecordsRequestBody extends SpeakeasyBase {
    deviceId?: string;
    recordPatches?: shared.RecordPatch[];
    syncSessionToken: string;
}
export declare class UpdateRecordsRequest extends SpeakeasyBase {
    pathParams: UpdateRecordsPathParams;
    headers: UpdateRecordsHeaders;
    request: UpdateRecordsRequestBody;
}
export declare class UpdateRecordsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidLambdaFunctionOutputException?: any;
    invalidParameterException?: any;
    lambdaThrottledException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateRecordsResponse?: shared.UpdateRecordsResponse;
}
