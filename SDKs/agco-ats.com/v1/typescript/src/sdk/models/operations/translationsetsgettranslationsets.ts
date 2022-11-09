import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TranslationSetsGetTranslationSetsStateEnum {
    OutForProcessing = "OutForProcessing"
,    Processing = "Processing"
,    PendingApproval = "PendingApproval"
,    OutForTranslation = "OutForTranslation"
,    Cancelled = "Cancelled"
,    Completed = "Completed"
}


export class TranslationSetsGetTranslationSetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageId" })
  languageId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: TranslationSetsGetTranslationSetsStateEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stringId" })
  stringId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=translationRequestID" })
  translationRequestId?: number;
}


export class TranslationSetsGetTranslationSetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TranslationSetsGetTranslationSetsQueryParams;
}


export class TranslationSetsGetTranslationSetsResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseGlobalResourcesSharedModelsTranslationSet?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSet;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
