import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartPolicyGenerationHeaders extends SpeakeasyBase {
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


// StartPolicyGenerationRequestBodyCloudTrailDetails
/** 
 * Contains information about CloudTrail access.
**/
export class StartPolicyGenerationRequestBodyCloudTrailDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessRole" })
  accessRole?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=trails", elemType: shared.Trail })
  trails?: shared.Trail[];
}


// StartPolicyGenerationRequestBodyPolicyGenerationDetails
/** 
 * Contains the ARN details about the IAM entity for which the policy is generated.
**/
export class StartPolicyGenerationRequestBodyPolicyGenerationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=principalArn" })
  principalArn?: string;
}


export class StartPolicyGenerationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudTrailDetails" })
  cloudTrailDetails?: StartPolicyGenerationRequestBodyCloudTrailDetails;

  @SpeakeasyMetadata({ data: "json, name=policyGenerationDetails" })
  policyGenerationDetails: StartPolicyGenerationRequestBodyPolicyGenerationDetails;
}


export class StartPolicyGenerationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartPolicyGenerationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartPolicyGenerationRequestBody;
}


export class StartPolicyGenerationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  startPolicyGenerationResponse?: shared.StartPolicyGenerationResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
