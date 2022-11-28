import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDefinitionsGetContentDefinitionAttributesPathParams extends SpeakeasyBase {
    contentDefinitionId: number;
}
export declare class ContentDefinitionsGetContentDefinitionAttributesQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class ContentDefinitionsGetContentDefinitionAttributesRequest extends SpeakeasyBase {
    pathParams: ContentDefinitionsGetContentDefinitionAttributesPathParams;
    queryParams: ContentDefinitionsGetContentDefinitionAttributesQueryParams;
}
export declare class ContentDefinitionsGetContentDefinitionAttributesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;
    contentType: string;
    statusCode: number;
}
