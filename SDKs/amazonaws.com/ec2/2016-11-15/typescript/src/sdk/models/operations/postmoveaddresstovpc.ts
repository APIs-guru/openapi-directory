import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostMoveAddressToVpcActionEnum {
    MoveAddressToVpc = "MoveAddressToVpc"
}

export enum PostMoveAddressToVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostMoveAddressToVpcQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostMoveAddressToVpcActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostMoveAddressToVpcVersionEnum;
}


export class PostMoveAddressToVpcHeaders extends SpeakeasyBase {
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


export class PostMoveAddressToVpcRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostMoveAddressToVpcQueryParams;

  @Metadata()
  headers: PostMoveAddressToVpcHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostMoveAddressToVpcResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
