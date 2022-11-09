import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSetDesiredCapacityActionEnum {
    SetDesiredCapacity = "SetDesiredCapacity"
}

export enum PostSetDesiredCapacityVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostSetDesiredCapacityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSetDesiredCapacityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSetDesiredCapacityVersionEnum;
}


export class PostSetDesiredCapacityHeaders extends SpeakeasyBase {
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


export class PostSetDesiredCapacityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSetDesiredCapacityQueryParams;

  @Metadata()
  headers: PostSetDesiredCapacityHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSetDesiredCapacityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
