import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostApplyEnvironmentManagedActionActionEnum {
    ApplyEnvironmentManagedAction = "ApplyEnvironmentManagedAction"
}

export enum PostApplyEnvironmentManagedActionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostApplyEnvironmentManagedActionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostApplyEnvironmentManagedActionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostApplyEnvironmentManagedActionVersionEnum;
}


export class PostApplyEnvironmentManagedActionHeaders extends SpeakeasyBase {
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


export class PostApplyEnvironmentManagedActionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostApplyEnvironmentManagedActionQueryParams;

  @Metadata()
  headers: PostApplyEnvironmentManagedActionHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostApplyEnvironmentManagedActionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
