import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationSetsGetStatisticsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationSetsGetStatisticsRequest extends SpeakeasyBase {
    pathParams: TranslationSetsGetStatisticsPathParams;
}
export declare class TranslationSetsGetStatisticsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    globalResourcesSharedModelsTranslationSetStatistics?: shared.GlobalResourcesSharedModelsTranslationSetStatistics;
    statusCode: number;
}
