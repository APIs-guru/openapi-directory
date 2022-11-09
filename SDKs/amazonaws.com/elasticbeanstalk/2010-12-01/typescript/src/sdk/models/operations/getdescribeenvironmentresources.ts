import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeEnvironmentResourcesActionEnum {
    DescribeEnvironmentResources = "DescribeEnvironmentResources"
}

export enum GetDescribeEnvironmentResourcesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeEnvironmentResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEnvironmentResourcesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEnvironmentResourcesVersionEnum;
}


export class GetDescribeEnvironmentResourcesHeaders extends SpeakeasyBase {
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


export class GetDescribeEnvironmentResourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeEnvironmentResourcesQueryParams;

  @Metadata()
  headers: GetDescribeEnvironmentResourcesHeaders;
}


export class GetDescribeEnvironmentResourcesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
