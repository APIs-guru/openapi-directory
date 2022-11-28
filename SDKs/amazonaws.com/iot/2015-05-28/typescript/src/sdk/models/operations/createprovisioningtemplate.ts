import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProvisioningTemplateHeaders extends SpeakeasyBase {
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


// CreateProvisioningTemplateRequestBodyPreProvisioningHook
/** 
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
export class CreateProvisioningTemplateRequestBodyPreProvisioningHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payloadVersion" })
  payloadVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn?: string;
}


export class CreateProvisioningTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=preProvisioningHook" })
  preProvisioningHook?: CreateProvisioningTemplateRequestBodyPreProvisioningHook;

  @SpeakeasyMetadata({ data: "json, name=provisioningRoleArn" })
  provisioningRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}


export class CreateProvisioningTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateProvisioningTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateProvisioningTemplateRequestBody;
}


export class CreateProvisioningTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createProvisioningTemplateResponse?: shared.CreateProvisioningTemplateResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
