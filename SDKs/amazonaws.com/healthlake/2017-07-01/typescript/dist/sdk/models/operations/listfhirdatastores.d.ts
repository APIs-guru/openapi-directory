import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFhirDatastoresQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFhirDatastoresXAmzTargetEnum {
    HealthLakeListFhirDatastores = "HealthLake.ListFHIRDatastores"
}
export declare class ListFhirDatastoresHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFhirDatastoresXAmzTargetEnum;
}
export declare class ListFhirDatastoresRequest extends SpeakeasyBase {
    queryParams: ListFhirDatastoresQueryParams;
    headers: ListFhirDatastoresHeaders;
    request: shared.ListFhirDatastoresRequest;
}
export declare class ListFhirDatastoresResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listFhirDatastoresResponse?: shared.ListFhirDatastoresResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
