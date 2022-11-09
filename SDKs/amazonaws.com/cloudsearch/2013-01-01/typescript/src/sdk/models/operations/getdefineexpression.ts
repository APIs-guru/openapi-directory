import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDefineExpressionActionEnum {
    DefineExpression = "DefineExpression"
}


// GetDefineExpressionExpression
/** 
 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. 
**/
export class GetDefineExpressionExpression extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=ExpressionName" })
  expressionName: string;

  @Metadata({ data: "queryParam, name=ExpressionValue" })
  expressionValue: string;
}

export enum GetDefineExpressionVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetDefineExpressionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDefineExpressionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Expression" })
  expression: GetDefineExpressionExpression;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDefineExpressionVersionEnum;
}


export class GetDefineExpressionHeaders extends SpeakeasyBase {
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


export class GetDefineExpressionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDefineExpressionQueryParams;

  @Metadata()
  headers: GetDefineExpressionHeaders;
}


export class GetDefineExpressionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
