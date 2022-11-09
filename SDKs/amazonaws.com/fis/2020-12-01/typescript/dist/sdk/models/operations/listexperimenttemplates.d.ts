import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListExperimentTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListExperimentTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListExperimentTemplatesRequest extends SpeakeasyBase {
    queryParams: ListExperimentTemplatesQueryParams;
    headers: ListExperimentTemplatesHeaders;
}
export declare class ListExperimentTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    listExperimentTemplatesResponse?: shared.ListExperimentTemplatesResponse;
    statusCode: number;
    validationException?: any;
}
