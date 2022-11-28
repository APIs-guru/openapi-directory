import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum TranslationSetsGetTranslationSetsStateEnum {
    OutForProcessing = "OutForProcessing",
    Processing = "Processing",
    PendingApproval = "PendingApproval",
    OutForTranslation = "OutForTranslation",
    Cancelled = "Cancelled",
    Completed = "Completed"
}


export class TranslationSetsGetTranslationSetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageId" })
  languageId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: TranslationSetsGetTranslationSetsStateEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stringId" })
  stringId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=translationRequestID" })
  translationRequestId?: number;
}


export class TranslationSetsGetTranslationSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TranslationSetsGetTranslationSetsQueryParams;
}


export class TranslationSetsGetTranslationSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseGlobalResourcesSharedModelsTranslationSet?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSet;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
