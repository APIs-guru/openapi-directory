import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostModifyInstanceEventWindowActionEnum {
    ModifyInstanceEventWindow = "ModifyInstanceEventWindow"
}

export enum PostModifyInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostModifyInstanceEventWindowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyInstanceEventWindowActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyInstanceEventWindowVersionEnum;
}


export class PostModifyInstanceEventWindowHeaders extends SpeakeasyBase {
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


export class PostModifyInstanceEventWindowRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostModifyInstanceEventWindowQueryParams;

  @Metadata()
  headers: PostModifyInstanceEventWindowHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyInstanceEventWindowResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
