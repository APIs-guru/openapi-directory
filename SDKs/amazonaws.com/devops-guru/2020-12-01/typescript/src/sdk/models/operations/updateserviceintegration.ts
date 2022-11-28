import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateServiceIntegrationHeaders extends SpeakeasyBase {
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


// UpdateServiceIntegrationRequestBodyServiceIntegration
/** 
 *  Information about updating the integration status of an AWS service, such as AWS Systems Manager, with DevOps Guru. 
**/
export class UpdateServiceIntegrationRequestBodyServiceIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpsCenter" })
  opsCenter?: shared.OpsCenterIntegrationConfig;
}


export class UpdateServiceIntegrationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceIntegration" })
  serviceIntegration: UpdateServiceIntegrationRequestBodyServiceIntegration;
}


export class UpdateServiceIntegrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateServiceIntegrationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateServiceIntegrationRequestBody;
}


export class UpdateServiceIntegrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateServiceIntegrationResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
