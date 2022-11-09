import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCreateVpcEndpointServiceConfigurationActionEnum {
    CreateVpcEndpointServiceConfiguration = "CreateVpcEndpointServiceConfiguration"
}

export enum PostCreateVpcEndpointServiceConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostCreateVpcEndpointServiceConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCreateVpcEndpointServiceConfigurationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCreateVpcEndpointServiceConfigurationVersionEnum;
}


export class PostCreateVpcEndpointServiceConfigurationHeaders extends SpeakeasyBase {
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


export class PostCreateVpcEndpointServiceConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCreateVpcEndpointServiceConfigurationQueryParams;

  @Metadata()
  headers: PostCreateVpcEndpointServiceConfigurationHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCreateVpcEndpointServiceConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
