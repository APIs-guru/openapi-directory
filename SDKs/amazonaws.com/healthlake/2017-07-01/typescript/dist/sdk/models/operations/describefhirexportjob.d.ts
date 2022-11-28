import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFhirExportJobXAmzTargetEnum {
    HealthLakeDescribeFhirExportJob = "HealthLake.DescribeFHIRExportJob"
}
export declare class DescribeFhirExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFhirExportJobXAmzTargetEnum;
}
export declare class DescribeFhirExportJobRequest extends SpeakeasyBase {
    headers: DescribeFhirExportJobHeaders;
    request: shared.DescribeFhirExportJobRequest;
}
export declare class DescribeFhirExportJobResponse extends SpeakeasyBase {
    contentType: string;
    describeFhirExportJobResponse?: shared.DescribeFhirExportJobResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
