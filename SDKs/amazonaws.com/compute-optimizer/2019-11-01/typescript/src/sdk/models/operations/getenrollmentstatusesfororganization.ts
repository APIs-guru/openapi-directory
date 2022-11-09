import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetEnrollmentStatusesForOrganizationXAmzTargetEnum {
    ComputeOptimizerServiceGetEnrollmentStatusesForOrganization = "ComputeOptimizerService.GetEnrollmentStatusesForOrganization"
}


export class GetEnrollmentStatusesForOrganizationHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetEnrollmentStatusesForOrganizationXAmzTargetEnum;
}


export class GetEnrollmentStatusesForOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetEnrollmentStatusesForOrganizationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetEnrollmentStatusesForOrganizationRequest;
}


export class GetEnrollmentStatusesForOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getEnrollmentStatusesForOrganizationResponse?: shared.GetEnrollmentStatusesForOrganizationResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  missingAuthenticationToken?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
