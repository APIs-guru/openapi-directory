import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetTransitGatewayPrefixListReferencesActionEnum {
    GetTransitGatewayPrefixListReferences = "GetTransitGatewayPrefixListReferences"
}

export enum PostGetTransitGatewayPrefixListReferencesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetTransitGatewayPrefixListReferencesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetTransitGatewayPrefixListReferencesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetTransitGatewayPrefixListReferencesVersionEnum;
}


export class PostGetTransitGatewayPrefixListReferencesHeaders extends SpeakeasyBase {
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


export class PostGetTransitGatewayPrefixListReferencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetTransitGatewayPrefixListReferencesQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetTransitGatewayPrefixListReferencesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetTransitGatewayPrefixListReferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
