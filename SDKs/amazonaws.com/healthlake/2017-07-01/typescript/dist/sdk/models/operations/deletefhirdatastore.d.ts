import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFhirDatastoreXAmzTargetEnum {
    HealthLakeDeleteFhirDatastore = "HealthLake.DeleteFHIRDatastore"
}
export declare class DeleteFhirDatastoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFhirDatastoreXAmzTargetEnum;
}
export declare class DeleteFhirDatastoreRequest extends SpeakeasyBase {
    headers: DeleteFhirDatastoreHeaders;
    request: shared.DeleteFhirDatastoreRequest;
}
export declare class DeleteFhirDatastoreResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteFhirDatastoreResponse?: shared.DeleteFhirDatastoreResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
