import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProvisioningTemplateVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: string;
}


export class CreateProvisioningTemplateVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=setAsDefault" })
  setAsDefault?: boolean;
}


export class CreateProvisioningTemplateVersionHeaders extends SpeakeasyBase {
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


export class CreateProvisioningTemplateVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=templateBody" })
  templateBody: string;
}


export class CreateProvisioningTemplateVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateProvisioningTemplateVersionPathParams;

  @Metadata()
  queryParams: CreateProvisioningTemplateVersionQueryParams;

  @Metadata()
  headers: CreateProvisioningTemplateVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProvisioningTemplateVersionRequestBody;
}


export class CreateProvisioningTemplateVersionResponse extends SpeakeasyBase {
  @Metadata()
  conflictingResourceUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createProvisioningTemplateVersionResponse?: shared.CreateProvisioningTemplateVersionResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  versionsLimitExceededException?: any;
}
