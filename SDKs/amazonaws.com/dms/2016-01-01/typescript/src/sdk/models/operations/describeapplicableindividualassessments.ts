import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeApplicableIndividualAssessmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeApplicableIndividualAssessmentsXAmzTargetEnum {
    AmazonDmSv20160101DescribeApplicableIndividualAssessments = "AmazonDMSv20160101.DescribeApplicableIndividualAssessments"
}


export class DescribeApplicableIndividualAssessmentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeApplicableIndividualAssessmentsXAmzTargetEnum;
}


export class DescribeApplicableIndividualAssessmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeApplicableIndividualAssessmentsQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeApplicableIndividualAssessmentsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeApplicableIndividualAssessmentsMessage;
}


export class DescribeApplicableIndividualAssessmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeApplicableIndividualAssessmentsResponse?: shared.DescribeApplicableIndividualAssessmentsResponse;

  @SpeakeasyMetadata()
  invalidResourceStateFault?: any;

  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
