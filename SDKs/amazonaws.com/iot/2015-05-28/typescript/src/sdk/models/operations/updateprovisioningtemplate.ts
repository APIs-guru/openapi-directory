import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateProvisioningTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: string;
}


export class UpdateProvisioningTemplateHeaders extends SpeakeasyBase {
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


// UpdateProvisioningTemplateRequestBodyPreProvisioningHook
/** 
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
export class UpdateProvisioningTemplateRequestBodyPreProvisioningHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=payloadVersion" })
  payloadVersion?: string;

  @Metadata({ data: "json, name=targetArn" })
  targetArn?: string;
}


export class UpdateProvisioningTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultVersionId" })
  defaultVersionId?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=preProvisioningHook" })
  preProvisioningHook?: UpdateProvisioningTemplateRequestBodyPreProvisioningHook;

  @Metadata({ data: "json, name=provisioningRoleArn" })
  provisioningRoleArn?: string;

  @Metadata({ data: "json, name=removePreProvisioningHook" })
  removePreProvisioningHook?: boolean;
}


export class UpdateProvisioningTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProvisioningTemplatePathParams;

  @Metadata()
  headers: UpdateProvisioningTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateProvisioningTemplateRequestBody;
}


export class UpdateProvisioningTemplateResponse extends SpeakeasyBase {
  @Metadata()
  conflictingResourceUpdateException?: any;

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
  unauthorizedException?: any;

  @Metadata()
  updateProvisioningTemplateResponse?: Map<string, any>;
}
