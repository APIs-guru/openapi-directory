import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteVpcEndpointServiceConfigurationsActionEnum {
    DeleteVpcEndpointServiceConfigurations = "DeleteVpcEndpointServiceConfigurations"
}

export enum PostDeleteVpcEndpointServiceConfigurationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDeleteVpcEndpointServiceConfigurationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteVpcEndpointServiceConfigurationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteVpcEndpointServiceConfigurationsVersionEnum;
}


export class PostDeleteVpcEndpointServiceConfigurationsHeaders extends SpeakeasyBase {
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


export class PostDeleteVpcEndpointServiceConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteVpcEndpointServiceConfigurationsQueryParams;

  @Metadata()
  headers: PostDeleteVpcEndpointServiceConfigurationsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteVpcEndpointServiceConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
