import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListRecommendationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListRecommendationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum ListRecommendationsRequestBodyLocaleEnum {
    DeDe = "DE_DE"
,    EnUs = "EN_US"
,    EnGb = "EN_GB"
,    EsEs = "ES_ES"
,    FrFr = "FR_FR"
,    ItIt = "IT_IT"
,    JaJp = "JA_JP"
,    KoKr = "KO_KR"
,    PtBr = "PT_BR"
,    ZhCn = "ZH_CN"
,    ZhTw = "ZH_TW"
}


export class ListRecommendationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightId" })
  insightId: string;

  @Metadata({ data: "json, name=Locale" })
  locale?: ListRecommendationsRequestBodyLocaleEnum;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}


export class ListRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListRecommendationsQueryParams;

  @Metadata()
  headers: ListRecommendationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListRecommendationsRequestBody;
}


export class ListRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listRecommendationsResponse?: shared.ListRecommendationsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
