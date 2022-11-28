import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartFhirImportJobXAmzTargetEnum {
    HealthLakeStartFhirImportJob = "HealthLake.StartFHIRImportJob"
}
export declare class StartFhirImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFhirImportJobXAmzTargetEnum;
}
export declare class StartFhirImportJobRequest extends SpeakeasyBase {
    headers: StartFhirImportJobHeaders;
    request: shared.StartFhirImportJobRequest;
}
export declare class StartFhirImportJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    startFhirImportJobResponse?: shared.StartFhirImportJobResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
