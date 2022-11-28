import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProvisioningTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: string;
}


export class DeleteProvisioningTemplateHeaders extends SpeakeasyBase {
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


export class DeleteProvisioningTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProvisioningTemplatePathParams;

  @SpeakeasyMetadata()
  headers: DeleteProvisioningTemplateHeaders;
}


export class DeleteProvisioningTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingResourceUpdateException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteConflictException?: any;

  @SpeakeasyMetadata()
  deleteProvisioningTemplateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
