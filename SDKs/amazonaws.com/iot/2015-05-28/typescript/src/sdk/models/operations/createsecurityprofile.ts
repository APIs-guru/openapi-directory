import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSecurityProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityProfileName" })
  securityProfileName: string;
}


export class CreateSecurityProfileHeaders extends SpeakeasyBase {
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


export class CreateSecurityProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalMetricsToRetain" })
  additionalMetricsToRetain?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalMetricsToRetainV2", elemType: shared.MetricToRetain })
  additionalMetricsToRetainV2?: shared.MetricToRetain[];

  @SpeakeasyMetadata({ data: "json, name=alertTargets", elemType: shared.AlertTarget })
  alertTargets?: Map<string, shared.AlertTarget>;

  @SpeakeasyMetadata({ data: "json, name=behaviors", elemType: shared.Behavior })
  behaviors?: shared.Behavior[];

  @SpeakeasyMetadata({ data: "json, name=securityProfileDescription" })
  securityProfileDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateSecurityProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSecurityProfilePathParams;

  @SpeakeasyMetadata()
  headers: CreateSecurityProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSecurityProfileRequestBody;
}


export class CreateSecurityProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSecurityProfileResponse?: shared.CreateSecurityProfileResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
