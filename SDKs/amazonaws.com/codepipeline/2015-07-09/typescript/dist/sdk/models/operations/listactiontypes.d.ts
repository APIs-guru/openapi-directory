import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListActionTypesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListActionTypesXAmzTargetEnum {
    CodePipeline20150709ListActionTypes = "CodePipeline_20150709.ListActionTypes"
}
export declare class ListActionTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActionTypesXAmzTargetEnum;
}
export declare class ListActionTypesRequest extends SpeakeasyBase {
    queryParams: ListActionTypesQueryParams;
    headers: ListActionTypesHeaders;
    request: shared.ListActionTypesInput;
}
export declare class ListActionTypesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listActionTypesOutput?: shared.ListActionTypesOutput;
    statusCode: number;
    validationException?: any;
}
