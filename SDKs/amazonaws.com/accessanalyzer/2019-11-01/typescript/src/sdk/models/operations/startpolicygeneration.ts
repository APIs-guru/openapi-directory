import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartPolicyGenerationHeaders extends SpeakeasyBase {
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


// StartPolicyGenerationRequestBodyCloudTrailDetails
/** 
 * Contains information about CloudTrail access.
**/
export class StartPolicyGenerationRequestBodyCloudTrailDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessRole" })
  accessRole?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=trails", elemType: shared.Trail })
  trails?: shared.Trail[];
}


// StartPolicyGenerationRequestBodyPolicyGenerationDetails
/** 
 * Contains the ARN details about the IAM entity for which the policy is generated.
**/
export class StartPolicyGenerationRequestBodyPolicyGenerationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=principalArn" })
  principalArn?: string;
}


export class StartPolicyGenerationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=cloudTrailDetails" })
  cloudTrailDetails?: StartPolicyGenerationRequestBodyCloudTrailDetails;

  @Metadata({ data: "json, name=policyGenerationDetails" })
  policyGenerationDetails: StartPolicyGenerationRequestBodyPolicyGenerationDetails;
}


export class StartPolicyGenerationRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartPolicyGenerationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartPolicyGenerationRequestBody;
}


export class StartPolicyGenerationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  startPolicyGenerationResponse?: shared.StartPolicyGenerationResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
