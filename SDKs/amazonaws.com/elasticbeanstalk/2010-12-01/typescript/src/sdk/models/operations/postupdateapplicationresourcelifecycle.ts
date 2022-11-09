import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostUpdateApplicationResourceLifecycleActionEnum {
    UpdateApplicationResourceLifecycle = "UpdateApplicationResourceLifecycle"
}

export enum PostUpdateApplicationResourceLifecycleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostUpdateApplicationResourceLifecycleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUpdateApplicationResourceLifecycleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUpdateApplicationResourceLifecycleVersionEnum;
}


export class PostUpdateApplicationResourceLifecycleHeaders extends SpeakeasyBase {
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


export class PostUpdateApplicationResourceLifecycleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostUpdateApplicationResourceLifecycleQueryParams;

  @Metadata()
  headers: PostUpdateApplicationResourceLifecycleHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUpdateApplicationResourceLifecycleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
