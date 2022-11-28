import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostEnableVgwRoutePropagationActionEnum {
    EnableVgwRoutePropagation = "EnableVgwRoutePropagation"
}

export enum PostEnableVgwRoutePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostEnableVgwRoutePropagationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostEnableVgwRoutePropagationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostEnableVgwRoutePropagationVersionEnum;
}


export class PostEnableVgwRoutePropagationHeaders extends SpeakeasyBase {
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


export class PostEnableVgwRoutePropagationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostEnableVgwRoutePropagationQueryParams;

  @SpeakeasyMetadata()
  headers: PostEnableVgwRoutePropagationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostEnableVgwRoutePropagationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
