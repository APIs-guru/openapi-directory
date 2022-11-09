import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationSetsGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationSetsGetStatisticsPathParams;
}


export class TranslationSetsGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  globalResourcesSharedModelsTranslationSetStatistics?: shared.GlobalResourcesSharedModelsTranslationSetStatistics;

  @Metadata()
  statusCode: number;
}
