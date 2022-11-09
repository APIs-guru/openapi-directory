import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeReplicationTaskAssessmentResultsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeReplicationTaskAssessmentResultsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationTaskAssessmentResults = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults"
}


export class DescribeReplicationTaskAssessmentResultsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeReplicationTaskAssessmentResultsXAmzTargetEnum;
}


export class DescribeReplicationTaskAssessmentResultsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeReplicationTaskAssessmentResultsQueryParams;

  @Metadata()
  headers: DescribeReplicationTaskAssessmentResultsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeReplicationTaskAssessmentResultsMessage;
}


export class DescribeReplicationTaskAssessmentResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeReplicationTaskAssessmentResultsResponse?: shared.DescribeReplicationTaskAssessmentResultsResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
