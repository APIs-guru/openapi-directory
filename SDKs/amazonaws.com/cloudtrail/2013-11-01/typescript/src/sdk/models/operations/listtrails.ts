import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTrailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListTrailsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListTrails = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails"
}


export class ListTrailsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTrailsXAmzTargetEnum;
}


export class ListTrailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTrailsQueryParams;

  @Metadata()
  headers: ListTrailsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTrailsRequest;
}


export class ListTrailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTrailsResponse?: shared.ListTrailsResponse;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
