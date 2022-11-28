import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAccountAuditConfigurationHeaders extends SpeakeasyBase {
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


export class UpdateAccountAuditConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditCheckConfigurations", elemType: shared.AuditCheckConfiguration })
  auditCheckConfigurations?: Map<string, shared.AuditCheckConfiguration>;

  @SpeakeasyMetadata({ data: "json, name=auditNotificationTargetConfigurations", elemType: shared.AuditNotificationTarget })
  auditNotificationTargetConfigurations?: Map<string, shared.AuditNotificationTarget>;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class UpdateAccountAuditConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateAccountAuditConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAccountAuditConfigurationRequestBody;
}


export class UpdateAccountAuditConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateAccountAuditConfigurationResponse?: Map<string, any>;
}
