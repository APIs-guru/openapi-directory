import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateProvisioningTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: string;
}


export class UpdateProvisioningTemplateHeaders extends SpeakeasyBase {
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


// UpdateProvisioningTemplateRequestBodyPreProvisioningHook
/** 
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
export class UpdateProvisioningTemplateRequestBodyPreProvisioningHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payloadVersion" })
  payloadVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn?: string;
}


export class UpdateProvisioningTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultVersionId" })
  defaultVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=preProvisioningHook" })
  preProvisioningHook?: UpdateProvisioningTemplateRequestBodyPreProvisioningHook;

  @SpeakeasyMetadata({ data: "json, name=provisioningRoleArn" })
  provisioningRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=removePreProvisioningHook" })
  removePreProvisioningHook?: boolean;
}


export class UpdateProvisioningTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProvisioningTemplatePathParams;

  @SpeakeasyMetadata()
  headers: UpdateProvisioningTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateProvisioningTemplateRequestBody;
}


export class UpdateProvisioningTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingResourceUpdateException?: any;

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
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateProvisioningTemplateResponse?: Map<string, any>;
}
