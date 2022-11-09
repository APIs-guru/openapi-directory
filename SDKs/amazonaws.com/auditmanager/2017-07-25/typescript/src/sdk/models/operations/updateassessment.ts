import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAssessmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;
}


export class UpdateAssessmentHeaders extends SpeakeasyBase {
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


// UpdateAssessmentRequestBodyAssessmentReportsDestination
/** 
 *  The location in which Audit Manager saves assessment reports for the given assessment. 
**/
export class UpdateAssessmentRequestBodyAssessmentReportsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=destinationType" })
  destinationType?: shared.AssessmentReportDestinationTypeEnum;
}


// UpdateAssessmentRequestBodyScope
/** 
 *  The wrapper that contains the accounts and services in scope for the assessment. 
**/
export class UpdateAssessmentRequestBodyScope extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsAccounts", elemType: shared.AwsAccount })
  awsAccounts?: shared.AwsAccount[];

  @Metadata({ data: "json, name=awsServices", elemType: shared.AwsService })
  awsServices?: shared.AwsService[];
}


export class UpdateAssessmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentDescription" })
  assessmentDescription?: string;

  @Metadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @Metadata({ data: "json, name=assessmentReportsDestination" })
  assessmentReportsDestination?: UpdateAssessmentRequestBodyAssessmentReportsDestination;

  @Metadata({ data: "json, name=roles", elemType: shared.Role })
  roles?: shared.Role[];

  @Metadata({ data: "json, name=scope" })
  scope: UpdateAssessmentRequestBodyScope;
}


export class UpdateAssessmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAssessmentPathParams;

  @Metadata()
  headers: UpdateAssessmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAssessmentRequestBody;
}


export class UpdateAssessmentResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAssessmentResponse?: shared.UpdateAssessmentResponse;

  @Metadata()
  validationException?: any;
}
