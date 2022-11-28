import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDefineRankExpressionActionEnum {
    DefineRankExpression = "DefineRankExpression"
}


// GetDefineRankExpressionRankExpression
/** 
 * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query. 
**/
export class GetDefineRankExpressionRankExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=RankExpression" })
  rankExpression: string;

  @SpeakeasyMetadata({ data: "queryParam, name=RankName" })
  rankName: string;
}

export enum GetDefineRankExpressionVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class GetDefineRankExpressionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDefineRankExpressionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RankExpression" })
  rankExpression: GetDefineRankExpressionRankExpression;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDefineRankExpressionVersionEnum;
}


export class GetDefineRankExpressionHeaders extends SpeakeasyBase {
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


export class GetDefineRankExpressionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDefineRankExpressionQueryParams;

  @SpeakeasyMetadata()
  headers: GetDefineRankExpressionHeaders;
}


export class GetDefineRankExpressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
