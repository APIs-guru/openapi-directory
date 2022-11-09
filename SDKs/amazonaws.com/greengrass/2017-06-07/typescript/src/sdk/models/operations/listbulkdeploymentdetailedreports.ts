import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListBulkDeploymentDetailedReportsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BulkDeploymentId" })
  bulkDeploymentId: string;
}


export class ListBulkDeploymentDetailedReportsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListBulkDeploymentDetailedReportsHeaders extends SpeakeasyBase {
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


export class ListBulkDeploymentDetailedReportsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListBulkDeploymentDetailedReportsPathParams;

  @Metadata()
  queryParams: ListBulkDeploymentDetailedReportsQueryParams;

  @Metadata()
  headers: ListBulkDeploymentDetailedReportsHeaders;
}


export class ListBulkDeploymentDetailedReportsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  listBulkDeploymentDetailedReportsResponse?: shared.ListBulkDeploymentDetailedReportsResponse;

  @Metadata()
  statusCode: number;
}
