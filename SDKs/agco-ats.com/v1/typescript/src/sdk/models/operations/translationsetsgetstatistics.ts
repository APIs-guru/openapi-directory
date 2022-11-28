import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationSetsGetStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsGetStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationSetsGetStatisticsPathParams;
}


export class TranslationSetsGetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalResourcesSharedModelsTranslationSetStatistics?: shared.GlobalResourcesSharedModelsTranslationSetStatistics;

  @SpeakeasyMetadata()
  statusCode: number;
}
