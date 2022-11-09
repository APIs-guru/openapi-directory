import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeVpcClassicLinkDnsSupportActionEnum {
    DescribeVpcClassicLinkDnsSupport = "DescribeVpcClassicLinkDnsSupport"
}

export enum GetDescribeVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeVpcClassicLinkDnsSupportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeVpcClassicLinkDnsSupportActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeVpcClassicLinkDnsSupportVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcIds" })
  vpcIds?: string[];
}


export class GetDescribeVpcClassicLinkDnsSupportHeaders extends SpeakeasyBase {
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


export class GetDescribeVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeVpcClassicLinkDnsSupportQueryParams;

  @Metadata()
  headers: GetDescribeVpcClassicLinkDnsSupportHeaders;
}


export class GetDescribeVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
