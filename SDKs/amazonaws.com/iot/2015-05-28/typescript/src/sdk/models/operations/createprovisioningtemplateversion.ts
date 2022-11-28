import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProvisioningTemplateVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: string;
}


export class CreateProvisioningTemplateVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setAsDefault" })
  setAsDefault?: boolean;
}


export class CreateProvisioningTemplateVersionHeaders extends SpeakeasyBase {
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


export class CreateProvisioningTemplateVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody: string;
}


export class CreateProvisioningTemplateVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateProvisioningTemplateVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateProvisioningTemplateVersionQueryParams;

  @SpeakeasyMetadata()
  headers: CreateProvisioningTemplateVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateProvisioningTemplateVersionRequestBody;
}


export class CreateProvisioningTemplateVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingResourceUpdateException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createProvisioningTemplateVersionResponse?: shared.CreateProvisioningTemplateVersionResponse;

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

  @SpeakeasyMetadata()
  versionsLimitExceededException?: any;
}
