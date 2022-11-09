import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAssessmentHeaders extends SpeakeasyBase {
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


// CreateAssessmentRequestBodyAssessmentReportsDestination
/** 
 *  The location in which Audit Manager saves assessment reports for the given assessment. 
**/
export class CreateAssessmentRequestBodyAssessmentReportsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=destinationType" })
  destinationType?: shared.AssessmentReportDestinationTypeEnum;
}


// CreateAssessmentRequestBodyScope
/** 
 *  The wrapper that contains the accounts and services in scope for the assessment. 
**/
export class CreateAssessmentRequestBodyScope extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsAccounts", elemType: shared.AwsAccount })
  awsAccounts?: shared.AwsAccount[];

  @Metadata({ data: "json, name=awsServices", elemType: shared.AwsService })
  awsServices?: shared.AwsService[];
}


export class CreateAssessmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentReportsDestination" })
  assessmentReportsDestination: CreateAssessmentRequestBodyAssessmentReportsDestination;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=frameworkId" })
  frameworkId: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=roles", elemType: shared.Role })
  roles: shared.Role[];

  @Metadata({ data: "json, name=scope" })
  scope: CreateAssessmentRequestBodyScope;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateAssessmentRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAssessmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAssessmentRequestBody;
}


export class CreateAssessmentResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAssessmentResponse?: shared.CreateAssessmentResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
