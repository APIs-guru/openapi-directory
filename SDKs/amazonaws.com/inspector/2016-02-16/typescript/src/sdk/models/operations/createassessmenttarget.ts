import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAssessmentTargetXAmzTargetEnum {
    InspectorServiceCreateAssessmentTarget = "InspectorService.CreateAssessmentTarget"
}


export class CreateAssessmentTargetHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAssessmentTargetXAmzTargetEnum;
}


export class CreateAssessmentTargetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAssessmentTargetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAssessmentTargetRequest;
}


export class CreateAssessmentTargetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAssessmentTargetResponse?: shared.CreateAssessmentTargetResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidCrossAccountRoleException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  noSuchEntityException?: any;

  @Metadata()
  serviceTemporarilyUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
