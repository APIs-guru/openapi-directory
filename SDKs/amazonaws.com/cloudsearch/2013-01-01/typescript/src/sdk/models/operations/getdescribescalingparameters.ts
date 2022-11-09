import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeScalingParametersActionEnum {
    DescribeScalingParameters = "DescribeScalingParameters"
}

export enum GetDescribeScalingParametersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetDescribeScalingParametersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeScalingParametersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeScalingParametersVersionEnum;
}


export class GetDescribeScalingParametersHeaders extends SpeakeasyBase {
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


export class GetDescribeScalingParametersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeScalingParametersQueryParams;

  @Metadata()
  headers: GetDescribeScalingParametersHeaders;
}


export class GetDescribeScalingParametersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
