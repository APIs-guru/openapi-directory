import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDefineRankExpressionActionEnum {
    DefineRankExpression = "DefineRankExpression"
}


// GetDefineRankExpressionRankExpression
/** 
 * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query. 
**/
export class GetDefineRankExpressionRankExpression extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=RankExpression" })
  rankExpression: string;

  @Metadata({ data: "queryParam, name=RankName" })
  rankName: string;
}

export enum GetDefineRankExpressionVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class GetDefineRankExpressionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDefineRankExpressionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RankExpression" })
  rankExpression: GetDefineRankExpressionRankExpression;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDefineRankExpressionVersionEnum;
}


export class GetDefineRankExpressionHeaders extends SpeakeasyBase {
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


export class GetDefineRankExpressionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDefineRankExpressionQueryParams;

  @Metadata()
  headers: GetDefineRankExpressionHeaders;
}


export class GetDefineRankExpressionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
