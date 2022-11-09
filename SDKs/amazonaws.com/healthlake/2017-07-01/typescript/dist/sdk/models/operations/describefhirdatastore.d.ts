import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeFhirDatastoreXAmzTargetEnum {
    HealthLakeDescribeFhirDatastore = "HealthLake.DescribeFHIRDatastore"
}
export declare class DescribeFhirDatastoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFhirDatastoreXAmzTargetEnum;
}
export declare class DescribeFhirDatastoreRequest extends SpeakeasyBase {
    headers: DescribeFhirDatastoreHeaders;
    request: shared.DescribeFhirDatastoreRequest;
}
export declare class DescribeFhirDatastoreResponse extends SpeakeasyBase {
    contentType: string;
    describeFhirDatastoreResponse?: shared.DescribeFhirDatastoreResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
