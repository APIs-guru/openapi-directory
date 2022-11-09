import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSecurityProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=securityProfileName" })
  securityProfileName: string;
}


export class CreateSecurityProfileHeaders extends SpeakeasyBase {
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


export class CreateSecurityProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalMetricsToRetain" })
  additionalMetricsToRetain?: string[];

  @Metadata({ data: "json, name=additionalMetricsToRetainV2", elemType: shared.MetricToRetain })
  additionalMetricsToRetainV2?: shared.MetricToRetain[];

  @Metadata({ data: "json, name=alertTargets", elemType: shared.AlertTarget })
  alertTargets?: Map<string, shared.AlertTarget>;

  @Metadata({ data: "json, name=behaviors", elemType: shared.Behavior })
  behaviors?: shared.Behavior[];

  @Metadata({ data: "json, name=securityProfileDescription" })
  securityProfileDescription?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateSecurityProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSecurityProfilePathParams;

  @Metadata()
  headers: CreateSecurityProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSecurityProfileRequestBody;
}


export class CreateSecurityProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSecurityProfileResponse?: shared.CreateSecurityProfileResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
