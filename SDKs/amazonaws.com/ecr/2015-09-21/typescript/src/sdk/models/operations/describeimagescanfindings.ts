import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeImageScanFindingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeImageScanFindingsXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DescribeImageScanFindings = "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings"
}


export class DescribeImageScanFindingsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeImageScanFindingsXAmzTargetEnum;
}


export class DescribeImageScanFindingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeImageScanFindingsQueryParams;

  @Metadata()
  headers: DescribeImageScanFindingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeImageScanFindingsRequest;
}


export class DescribeImageScanFindingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeImageScanFindingsResponse?: shared.DescribeImageScanFindingsResponse;

  @Metadata()
  imageNotFoundException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  scanNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
