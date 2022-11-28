import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetReservedInstancesExchangeQuoteActionEnum {
    GetReservedInstancesExchangeQuote = "GetReservedInstancesExchangeQuote"
}

export enum PostGetReservedInstancesExchangeQuoteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetReservedInstancesExchangeQuoteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetReservedInstancesExchangeQuoteActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetReservedInstancesExchangeQuoteVersionEnum;
}


export class PostGetReservedInstancesExchangeQuoteHeaders extends SpeakeasyBase {
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


export class PostGetReservedInstancesExchangeQuoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetReservedInstancesExchangeQuoteQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetReservedInstancesExchangeQuoteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetReservedInstancesExchangeQuoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
