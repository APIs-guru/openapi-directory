import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAssessmentHeaders extends SpeakeasyBase {
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


// CreateAssessmentRequestBodyAssessmentReportsDestination
/** 
 *  The location in which Audit Manager saves assessment reports for the given assessment. 
**/
export class CreateAssessmentRequestBodyAssessmentReportsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationType" })
  destinationType?: shared.AssessmentReportDestinationTypeEnum;
}


// CreateAssessmentRequestBodyScope
/** 
 *  The wrapper that contains the accounts and services in scope for the assessment. 
**/
export class CreateAssessmentRequestBodyScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsAccounts", elemType: shared.AwsAccount })
  awsAccounts?: shared.AwsAccount[];

  @SpeakeasyMetadata({ data: "json, name=awsServices", elemType: shared.AwsService })
  awsServices?: shared.AwsService[];
}


export class CreateAssessmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentReportsDestination" })
  assessmentReportsDestination: CreateAssessmentRequestBodyAssessmentReportsDestination;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=frameworkId" })
  frameworkId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: shared.Role })
  roles: shared.Role[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: CreateAssessmentRequestBodyScope;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateAssessmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAssessmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAssessmentRequestBody;
}


export class CreateAssessmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAssessmentResponse?: shared.CreateAssessmentResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
