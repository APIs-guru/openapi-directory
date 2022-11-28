import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFhirDatastoreXAmzTargetEnum {
    HealthLakeCreateFhirDatastore = "HealthLake.CreateFHIRDatastore"
}
export declare class CreateFhirDatastoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFhirDatastoreXAmzTargetEnum;
}
export declare class CreateFhirDatastoreRequest extends SpeakeasyBase {
    headers: CreateFhirDatastoreHeaders;
    request: shared.CreateFhirDatastoreRequest;
}
export declare class CreateFhirDatastoreResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createFhirDatastoreResponse?: shared.CreateFhirDatastoreResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
