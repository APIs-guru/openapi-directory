import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListRecommendationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListRecommendationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum ListRecommendationsRequestBodyLocaleEnum {
    DeDe = "DE_DE",
    EnUs = "EN_US",
    EnGb = "EN_GB",
    EsEs = "ES_ES",
    FrFr = "FR_FR",
    ItIt = "IT_IT",
    JaJp = "JA_JP",
    KoKr = "KO_KR",
    PtBr = "PT_BR",
    ZhCn = "ZH_CN",
    ZhTw = "ZH_TW"
}


export class ListRecommendationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightId" })
  insightId: string;

  @SpeakeasyMetadata({ data: "json, name=Locale" })
  locale?: ListRecommendationsRequestBodyLocaleEnum;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}


export class ListRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListRecommendationsQueryParams;

  @SpeakeasyMetadata()
  headers: ListRecommendationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListRecommendationsRequestBody;
}


export class ListRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listRecommendationsResponse?: shared.ListRecommendationsResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
