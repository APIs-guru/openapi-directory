import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeImageTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeImageTagsXAmzTargetEnum {
    SpencerFrontendServiceDescribeImageTags = "SpencerFrontendService.DescribeImageTags"
}


export class DescribeImageTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeImageTagsXAmzTargetEnum;
}


export class DescribeImageTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeImageTagsQueryParams;

  @Metadata()
  headers: DescribeImageTagsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeImageTagsRequest;
}


export class DescribeImageTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeImageTagsResponse?: shared.DescribeImageTagsResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
