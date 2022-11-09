import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostEnableVgwRoutePropagationActionEnum {
    EnableVgwRoutePropagation = "EnableVgwRoutePropagation"
}

export enum PostEnableVgwRoutePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostEnableVgwRoutePropagationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostEnableVgwRoutePropagationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostEnableVgwRoutePropagationVersionEnum;
}


export class PostEnableVgwRoutePropagationHeaders extends SpeakeasyBase {
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


export class PostEnableVgwRoutePropagationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostEnableVgwRoutePropagationQueryParams;

  @Metadata()
  headers: PostEnableVgwRoutePropagationHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostEnableVgwRoutePropagationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
