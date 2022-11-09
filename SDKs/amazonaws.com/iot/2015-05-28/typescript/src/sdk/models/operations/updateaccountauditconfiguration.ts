import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAccountAuditConfigurationHeaders extends SpeakeasyBase {
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


export class UpdateAccountAuditConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditCheckConfigurations", elemType: shared.AuditCheckConfiguration })
  auditCheckConfigurations?: Map<string, shared.AuditCheckConfiguration>;

  @Metadata({ data: "json, name=auditNotificationTargetConfigurations", elemType: shared.AuditNotificationTarget })
  auditNotificationTargetConfigurations?: Map<string, shared.AuditNotificationTarget>;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class UpdateAccountAuditConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateAccountAuditConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAccountAuditConfigurationRequestBody;
}


export class UpdateAccountAuditConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateAccountAuditConfigurationResponse?: Map<string, any>;
}
