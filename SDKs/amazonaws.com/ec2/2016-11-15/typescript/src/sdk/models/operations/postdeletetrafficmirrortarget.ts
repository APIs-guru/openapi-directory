import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDeleteTrafficMirrorTargetActionEnum {
    DeleteTrafficMirrorTarget = "DeleteTrafficMirrorTarget"
}

export enum PostDeleteTrafficMirrorTargetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDeleteTrafficMirrorTargetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteTrafficMirrorTargetActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteTrafficMirrorTargetVersionEnum;
}


export class PostDeleteTrafficMirrorTargetHeaders extends SpeakeasyBase {
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


export class PostDeleteTrafficMirrorTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDeleteTrafficMirrorTargetQueryParams;

  @SpeakeasyMetadata()
  headers: PostDeleteTrafficMirrorTargetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteTrafficMirrorTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
