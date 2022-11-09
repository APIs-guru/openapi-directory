import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProvisioningTemplateHeaders extends SpeakeasyBase {
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


// CreateProvisioningTemplateRequestBodyPreProvisioningHook
/** 
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
export class CreateProvisioningTemplateRequestBodyPreProvisioningHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=payloadVersion" })
  payloadVersion?: string;

  @Metadata({ data: "json, name=targetArn" })
  targetArn?: string;
}


export class CreateProvisioningTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=preProvisioningHook" })
  preProvisioningHook?: CreateProvisioningTemplateRequestBodyPreProvisioningHook;

  @Metadata({ data: "json, name=provisioningRoleArn" })
  provisioningRoleArn: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=templateBody" })
  templateBody: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}


export class CreateProvisioningTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateProvisioningTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProvisioningTemplateRequestBody;
}


export class CreateProvisioningTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createProvisioningTemplateResponse?: shared.CreateProvisioningTemplateResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
