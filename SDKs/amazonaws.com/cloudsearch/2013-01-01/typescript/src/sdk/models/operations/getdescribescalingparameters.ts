import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeScalingParametersActionEnum {
    DescribeScalingParameters = "DescribeScalingParameters"
}

export enum GetDescribeScalingParametersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetDescribeScalingParametersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeScalingParametersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeScalingParametersVersionEnum;
}


export class GetDescribeScalingParametersHeaders extends SpeakeasyBase {
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


export class GetDescribeScalingParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeScalingParametersQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeScalingParametersHeaders;
}


export class GetDescribeScalingParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
