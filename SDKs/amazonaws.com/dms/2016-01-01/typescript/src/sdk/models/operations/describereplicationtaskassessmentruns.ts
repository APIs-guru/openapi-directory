import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeReplicationTaskAssessmentRunsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeReplicationTaskAssessmentRunsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationTaskAssessmentRuns = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns"
}


export class DescribeReplicationTaskAssessmentRunsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeReplicationTaskAssessmentRunsXAmzTargetEnum;
}


export class DescribeReplicationTaskAssessmentRunsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeReplicationTaskAssessmentRunsQueryParams;

  @Metadata()
  headers: DescribeReplicationTaskAssessmentRunsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeReplicationTaskAssessmentRunsMessage;
}


export class DescribeReplicationTaskAssessmentRunsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeReplicationTaskAssessmentRunsResponse?: shared.DescribeReplicationTaskAssessmentRunsResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
