import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostAssociateInstanceEventWindowActionEnum {
    AssociateInstanceEventWindow = "AssociateInstanceEventWindow"
}

export enum PostAssociateInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostAssociateInstanceEventWindowQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAssociateInstanceEventWindowActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAssociateInstanceEventWindowVersionEnum;
}


export class PostAssociateInstanceEventWindowHeaders extends SpeakeasyBase {
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


export class PostAssociateInstanceEventWindowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAssociateInstanceEventWindowQueryParams;

  @SpeakeasyMetadata()
  headers: PostAssociateInstanceEventWindowHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAssociateInstanceEventWindowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
