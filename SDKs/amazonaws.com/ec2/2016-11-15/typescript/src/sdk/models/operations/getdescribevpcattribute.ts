import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeVpcAttributeActionEnum {
    DescribeVpcAttribute = "DescribeVpcAttribute"
}

export enum GetDescribeVpcAttributeAttributeEnum {
    EnableDnsSupport = "enableDnsSupport"
,    EnableDnsHostnames = "enableDnsHostnames"
}

export enum GetDescribeVpcAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeVpcAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeVpcAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetDescribeVpcAttributeAttributeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeVpcAttributeVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId: string;
}


export class GetDescribeVpcAttributeHeaders extends SpeakeasyBase {
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


export class GetDescribeVpcAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeVpcAttributeQueryParams;

  @Metadata()
  headers: GetDescribeVpcAttributeHeaders;
}


export class GetDescribeVpcAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
