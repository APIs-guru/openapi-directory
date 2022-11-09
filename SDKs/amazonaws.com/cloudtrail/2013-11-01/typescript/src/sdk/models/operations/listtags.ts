import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags"
}


export class ListTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTagsXAmzTargetEnum;
}


export class ListTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTagsQueryParams;

  @Metadata()
  headers: ListTagsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTagsRequest;
}


export class ListTagsResponse extends SpeakeasyBase {
  @Metadata()
  cloudTrailArnInvalidException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidTokenException?: any;

  @Metadata()
  invalidTrailNameException?: any;

  @Metadata()
  listTagsResponse?: shared.ListTagsResponse;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceTypeNotSupportedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
