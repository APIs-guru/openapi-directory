import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeConversionTasksActionEnum {
    DescribeConversionTasks = "DescribeConversionTasks"
}

export enum GetDescribeConversionTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeConversionTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeConversionTasksActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConversionTaskId" })
  conversionTaskId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeConversionTasksVersionEnum;
}


export class GetDescribeConversionTasksHeaders extends SpeakeasyBase {
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


export class GetDescribeConversionTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeConversionTasksQueryParams;

  @Metadata()
  headers: GetDescribeConversionTasksHeaders;
}


export class GetDescribeConversionTasksResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
