import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJobOutputPathParams extends SpeakeasyBase {
    accountId: string;
    jobId: string;
    vaultName: string;
}
export declare class GetJobOutputHeaders extends SpeakeasyBase {
    range?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetJobOutputRequest extends SpeakeasyBase {
    pathParams: GetJobOutputPathParams;
    headers: GetJobOutputHeaders;
}
export declare class GetJobOutputResponse extends SpeakeasyBase {
    contentType: string;
    getJobOutputOutput?: shared.GetJobOutputOutput;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
