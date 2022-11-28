import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartFhirExportJobXAmzTargetEnum {
    HealthLakeStartFhirExportJob = "HealthLake.StartFHIRExportJob"
}
export declare class StartFhirExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFhirExportJobXAmzTargetEnum;
}
export declare class StartFhirExportJobRequest extends SpeakeasyBase {
    headers: StartFhirExportJobHeaders;
    request: shared.StartFhirExportJobRequest;
}
export declare class StartFhirExportJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    startFhirExportJobResponse?: shared.StartFhirExportJobResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
