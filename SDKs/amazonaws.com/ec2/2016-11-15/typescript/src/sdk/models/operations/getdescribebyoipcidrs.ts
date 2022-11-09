import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeByoipCidrsActionEnum {
    DescribeByoipCidrs = "DescribeByoipCidrs"
}

export enum GetDescribeByoipCidrsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeByoipCidrsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeByoipCidrsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeByoipCidrsVersionEnum;
}


export class GetDescribeByoipCidrsHeaders extends SpeakeasyBase {
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


export class GetDescribeByoipCidrsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeByoipCidrsQueryParams;

  @Metadata()
  headers: GetDescribeByoipCidrsHeaders;
}


export class GetDescribeByoipCidrsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
