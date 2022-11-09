import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeApplicableIndividualAssessmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeApplicableIndividualAssessmentsXAmzTargetEnum {
    AmazonDmSv20160101DescribeApplicableIndividualAssessments = "AmazonDMSv20160101.DescribeApplicableIndividualAssessments"
}


export class DescribeApplicableIndividualAssessmentsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeApplicableIndividualAssessmentsXAmzTargetEnum;
}


export class DescribeApplicableIndividualAssessmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeApplicableIndividualAssessmentsQueryParams;

  @Metadata()
  headers: DescribeApplicableIndividualAssessmentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeApplicableIndividualAssessmentsMessage;
}


export class DescribeApplicableIndividualAssessmentsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeApplicableIndividualAssessmentsResponse?: shared.DescribeApplicableIndividualAssessmentsResponse;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
