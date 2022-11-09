import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class InitiateJobPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class InitiateJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Provides options for defining a job.
**/
export declare class InitiateJobRequestBodyJobParameters extends SpeakeasyBase {
    archiveId?: string;
    description?: string;
    format?: string;
    inventoryRetrievalParameters?: shared.InventoryRetrievalJobInput;
    outputLocation?: shared.OutputLocation;
    retrievalByteRange?: string;
    snsTopic?: string;
    selectParameters?: shared.SelectParameters;
    tier?: string;
    type?: string;
}
export declare class InitiateJobRequestBody extends SpeakeasyBase {
    jobParameters?: InitiateJobRequestBodyJobParameters;
}
export declare class InitiateJobRequest extends SpeakeasyBase {
    pathParams: InitiateJobPathParams;
    headers: InitiateJobHeaders;
    request: InitiateJobRequestBody;
}
export declare class InitiateJobResponse extends SpeakeasyBase {
    contentType: string;
    initiateJobOutput?: Map<string, any>;
    insufficientCapacityException?: any;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    policyEnforcedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
