import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostAcceptReservedInstancesExchangeQuoteActionEnum {
    AcceptReservedInstancesExchangeQuote = "AcceptReservedInstancesExchangeQuote"
}

export enum PostAcceptReservedInstancesExchangeQuoteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostAcceptReservedInstancesExchangeQuoteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAcceptReservedInstancesExchangeQuoteActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAcceptReservedInstancesExchangeQuoteVersionEnum;
}


export class PostAcceptReservedInstancesExchangeQuoteHeaders extends SpeakeasyBase {
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


export class PostAcceptReservedInstancesExchangeQuoteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAcceptReservedInstancesExchangeQuoteQueryParams;

  @Metadata()
  headers: PostAcceptReservedInstancesExchangeQuoteHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAcceptReservedInstancesExchangeQuoteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
