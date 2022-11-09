import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSecurityProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=securityProfileName" })
  securityProfileName: string;
}


export class UpdateSecurityProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expectedVersion" })
  expectedVersion?: number;
}


export class UpdateSecurityProfileHeaders extends SpeakeasyBase {
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


export class UpdateSecurityProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalMetricsToRetain" })
  additionalMetricsToRetain?: string[];

  @Metadata({ data: "json, name=additionalMetricsToRetainV2", elemType: shared.MetricToRetain })
  additionalMetricsToRetainV2?: shared.MetricToRetain[];

  @Metadata({ data: "json, name=alertTargets", elemType: shared.AlertTarget })
  alertTargets?: Map<string, shared.AlertTarget>;

  @Metadata({ data: "json, name=behaviors", elemType: shared.Behavior })
  behaviors?: shared.Behavior[];

  @Metadata({ data: "json, name=deleteAdditionalMetricsToRetain" })
  deleteAdditionalMetricsToRetain?: boolean;

  @Metadata({ data: "json, name=deleteAlertTargets" })
  deleteAlertTargets?: boolean;

  @Metadata({ data: "json, name=deleteBehaviors" })
  deleteBehaviors?: boolean;

  @Metadata({ data: "json, name=securityProfileDescription" })
  securityProfileDescription?: string;
}


export class UpdateSecurityProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSecurityProfilePathParams;

  @Metadata()
  queryParams: UpdateSecurityProfileQueryParams;

  @Metadata()
  headers: UpdateSecurityProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSecurityProfileRequestBody;
}


export class UpdateSecurityProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateSecurityProfileResponse?: shared.UpdateSecurityProfileResponse;

  @Metadata()
  versionConflictException?: any;
}
