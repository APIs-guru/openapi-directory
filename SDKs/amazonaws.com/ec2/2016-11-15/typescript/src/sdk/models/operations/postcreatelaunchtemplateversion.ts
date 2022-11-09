import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCreateLaunchTemplateVersionActionEnum {
    CreateLaunchTemplateVersion = "CreateLaunchTemplateVersion"
}

export enum PostCreateLaunchTemplateVersionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostCreateLaunchTemplateVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCreateLaunchTemplateVersionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCreateLaunchTemplateVersionVersionEnum;
}


export class PostCreateLaunchTemplateVersionHeaders extends SpeakeasyBase {
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


export class PostCreateLaunchTemplateVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCreateLaunchTemplateVersionQueryParams;

  @Metadata()
  headers: PostCreateLaunchTemplateVersionHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCreateLaunchTemplateVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
