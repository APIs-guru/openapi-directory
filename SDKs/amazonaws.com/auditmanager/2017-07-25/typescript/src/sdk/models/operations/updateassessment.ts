import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAssessmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;
}


export class UpdateAssessmentHeaders extends SpeakeasyBase {
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
}


// UpdateAssessmentRequestBodyAssessmentReportsDestination
/** 
 *  The location in which Audit Manager saves assessment reports for the given assessment. 
**/
export class UpdateAssessmentRequestBodyAssessmentReportsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationType" })
  destinationType?: shared.AssessmentReportDestinationTypeEnum;
}


// UpdateAssessmentRequestBodyScope
/** 
 *  The wrapper that contains the accounts and services in scope for the assessment. 
**/
export class UpdateAssessmentRequestBodyScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsAccounts", elemType: shared.AwsAccount })
  awsAccounts?: shared.AwsAccount[];

  @SpeakeasyMetadata({ data: "json, name=awsServices", elemType: shared.AwsService })
  awsServices?: shared.AwsService[];
}


export class UpdateAssessmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentDescription" })
  assessmentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentReportsDestination" })
  assessmentReportsDestination?: UpdateAssessmentRequestBodyAssessmentReportsDestination;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: shared.Role })
  roles?: shared.Role[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: UpdateAssessmentRequestBodyScope;
}


export class UpdateAssessmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAssessmentPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAssessmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAssessmentRequestBody;
}


export class UpdateAssessmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAssessmentResponse?: shared.UpdateAssessmentResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
