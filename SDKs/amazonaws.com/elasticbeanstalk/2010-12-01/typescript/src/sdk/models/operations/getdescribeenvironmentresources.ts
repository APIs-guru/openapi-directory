import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeEnvironmentResourcesActionEnum {
    DescribeEnvironmentResources = "DescribeEnvironmentResources"
}

export enum GetDescribeEnvironmentResourcesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeEnvironmentResourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEnvironmentResourcesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEnvironmentResourcesVersionEnum;
}


export class GetDescribeEnvironmentResourcesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetDescribeEnvironmentResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeEnvironmentResourcesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeEnvironmentResourcesHeaders;
}


export class GetDescribeEnvironmentResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
