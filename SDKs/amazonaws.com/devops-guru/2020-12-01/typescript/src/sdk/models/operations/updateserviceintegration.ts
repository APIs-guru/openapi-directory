import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateServiceIntegrationHeaders extends SpeakeasyBase {
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


// UpdateServiceIntegrationRequestBodyServiceIntegration
/** 
 *  Information about updating the integration status of an AWS service, such as AWS Systems Manager, with DevOps Guru. 
**/
export class UpdateServiceIntegrationRequestBodyServiceIntegration extends SpeakeasyBase {
  @Metadata({ data: "json, name=OpsCenter" })
  opsCenter?: shared.OpsCenterIntegrationConfig;
}


export class UpdateServiceIntegrationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceIntegration" })
  serviceIntegration: UpdateServiceIntegrationRequestBodyServiceIntegration;
}


export class UpdateServiceIntegrationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateServiceIntegrationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateServiceIntegrationRequestBody;
}


export class UpdateServiceIntegrationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateServiceIntegrationResponse?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
