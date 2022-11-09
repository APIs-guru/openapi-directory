import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetEbsDefaultKmsKeyIdActionEnum {
    GetEbsDefaultKmsKeyId = "GetEbsDefaultKmsKeyId"
}

export enum PostGetEbsDefaultKmsKeyIdVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetEbsDefaultKmsKeyIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetEbsDefaultKmsKeyIdActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetEbsDefaultKmsKeyIdVersionEnum;
}


export class PostGetEbsDefaultKmsKeyIdHeaders extends SpeakeasyBase {
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


export class PostGetEbsDefaultKmsKeyIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetEbsDefaultKmsKeyIdQueryParams;

  @Metadata()
  headers: PostGetEbsDefaultKmsKeyIdHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetEbsDefaultKmsKeyIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
