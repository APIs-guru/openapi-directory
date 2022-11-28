import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostCreateNetworkInterfaceActionEnum {
    CreateNetworkInterface = "CreateNetworkInterface"
}

export enum PostCreateNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostCreateNetworkInterfaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCreateNetworkInterfaceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCreateNetworkInterfaceVersionEnum;
}


export class PostCreateNetworkInterfaceHeaders extends SpeakeasyBase {
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


export class PostCreateNetworkInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCreateNetworkInterfaceQueryParams;

  @SpeakeasyMetadata()
  headers: PostCreateNetworkInterfaceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCreateNetworkInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
