import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeVpcClassicLinkDnsSupportActionEnum {
    DescribeVpcClassicLinkDnsSupport = "DescribeVpcClassicLinkDnsSupport"
}

export enum GetDescribeVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeVpcClassicLinkDnsSupportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeVpcClassicLinkDnsSupportActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeVpcClassicLinkDnsSupportVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcIds" })
  vpcIds?: string[];
}


export class GetDescribeVpcClassicLinkDnsSupportHeaders extends SpeakeasyBase {
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


export class GetDescribeVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeVpcClassicLinkDnsSupportQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeVpcClassicLinkDnsSupportHeaders;
}


export class GetDescribeVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
