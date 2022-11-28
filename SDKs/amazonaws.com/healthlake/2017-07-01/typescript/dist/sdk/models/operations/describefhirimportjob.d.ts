import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFhirImportJobXAmzTargetEnum {
    HealthLakeDescribeFhirImportJob = "HealthLake.DescribeFHIRImportJob"
}
export declare class DescribeFhirImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFhirImportJobXAmzTargetEnum;
}
export declare class DescribeFhirImportJobRequest extends SpeakeasyBase {
    headers: DescribeFhirImportJobHeaders;
    request: shared.DescribeFhirImportJobRequest;
}
export declare class DescribeFhirImportJobResponse extends SpeakeasyBase {
    contentType: string;
    describeFhirImportJobResponse?: shared.DescribeFhirImportJobResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
