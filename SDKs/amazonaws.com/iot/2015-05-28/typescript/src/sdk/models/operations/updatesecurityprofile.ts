import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSecurityProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityProfileName" })
  securityProfileName: string;
}


export class UpdateSecurityProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expectedVersion" })
  expectedVersion?: number;
}


export class UpdateSecurityProfileHeaders extends SpeakeasyBase {
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


export class UpdateSecurityProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalMetricsToRetain" })
  additionalMetricsToRetain?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalMetricsToRetainV2", elemType: shared.MetricToRetain })
  additionalMetricsToRetainV2?: shared.MetricToRetain[];

  @SpeakeasyMetadata({ data: "json, name=alertTargets", elemType: shared.AlertTarget })
  alertTargets?: Map<string, shared.AlertTarget>;

  @SpeakeasyMetadata({ data: "json, name=behaviors", elemType: shared.Behavior })
  behaviors?: shared.Behavior[];

  @SpeakeasyMetadata({ data: "json, name=deleteAdditionalMetricsToRetain" })
  deleteAdditionalMetricsToRetain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleteAlertTargets" })
  deleteAlertTargets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleteBehaviors" })
  deleteBehaviors?: boolean;

  @SpeakeasyMetadata({ data: "json, name=securityProfileDescription" })
  securityProfileDescription?: string;
}


export class UpdateSecurityProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSecurityProfilePathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateSecurityProfileQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateSecurityProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSecurityProfileRequestBody;
}


export class UpdateSecurityProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateSecurityProfileResponse?: shared.UpdateSecurityProfileResponse;

  @SpeakeasyMetadata()
  versionConflictException?: any;
}
