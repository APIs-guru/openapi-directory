import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteEnvironmentConfigurationActionEnum {
    DeleteEnvironmentConfiguration = "DeleteEnvironmentConfiguration"
}

export enum PostDeleteEnvironmentConfigurationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostDeleteEnvironmentConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteEnvironmentConfigurationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteEnvironmentConfigurationVersionEnum;
}


export class PostDeleteEnvironmentConfigurationHeaders extends SpeakeasyBase {
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


export class PostDeleteEnvironmentConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteEnvironmentConfigurationQueryParams;

  @Metadata()
  headers: PostDeleteEnvironmentConfigurationHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteEnvironmentConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
