import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDefineExpressionActionEnum {
    DefineExpression = "DefineExpression"
}


// GetDefineExpressionExpression
/** 
 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. 
**/
export class GetDefineExpressionExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=ExpressionName" })
  expressionName: string;

  @SpeakeasyMetadata({ data: "queryParam, name=ExpressionValue" })
  expressionValue: string;
}

export enum GetDefineExpressionVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetDefineExpressionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDefineExpressionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Expression" })
  expression: GetDefineExpressionExpression;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDefineExpressionVersionEnum;
}


export class GetDefineExpressionHeaders extends SpeakeasyBase {
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


export class GetDefineExpressionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDefineExpressionQueryParams;

  @SpeakeasyMetadata()
  headers: GetDefineExpressionHeaders;
}


export class GetDefineExpressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
