import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeReplicationTaskIndividualAssessmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationTaskIndividualAssessments = "AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments"
}


export class DescribeReplicationTaskIndividualAssessmentsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum;
}


export class DescribeReplicationTaskIndividualAssessmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeReplicationTaskIndividualAssessmentsQueryParams;

  @Metadata()
  headers: DescribeReplicationTaskIndividualAssessmentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeReplicationTaskIndividualAssessmentsMessage;
}


export class DescribeReplicationTaskIndividualAssessmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeReplicationTaskIndividualAssessmentsResponse?: shared.DescribeReplicationTaskIndividualAssessmentsResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
