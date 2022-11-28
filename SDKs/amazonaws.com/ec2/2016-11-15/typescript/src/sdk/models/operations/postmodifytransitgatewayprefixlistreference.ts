import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostModifyTransitGatewayPrefixListReferenceActionEnum {
    ModifyTransitGatewayPrefixListReference = "ModifyTransitGatewayPrefixListReference"
}

export enum PostModifyTransitGatewayPrefixListReferenceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostModifyTransitGatewayPrefixListReferenceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyTransitGatewayPrefixListReferenceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyTransitGatewayPrefixListReferenceVersionEnum;
}


export class PostModifyTransitGatewayPrefixListReferenceHeaders extends SpeakeasyBase {
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


export class PostModifyTransitGatewayPrefixListReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostModifyTransitGatewayPrefixListReferenceQueryParams;

  @SpeakeasyMetadata()
  headers: PostModifyTransitGatewayPrefixListReferenceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyTransitGatewayPrefixListReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
