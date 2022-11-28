import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRegistriesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListRegistriesXAmzTargetEnum {
    AwsGlueListRegistries = "AWSGlue.ListRegistries"
}
export declare class ListRegistriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRegistriesXAmzTargetEnum;
}
export declare class ListRegistriesRequest extends SpeakeasyBase {
    queryParams: ListRegistriesQueryParams;
    headers: ListRegistriesHeaders;
    request: shared.ListRegistriesInput;
}
export declare class ListRegistriesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    listRegistriesResponse?: shared.ListRegistriesResponse;
    statusCode: number;
}
