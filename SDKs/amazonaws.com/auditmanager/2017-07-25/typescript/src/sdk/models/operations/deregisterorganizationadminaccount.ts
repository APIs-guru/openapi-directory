import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterOrganizationAdminAccountHeaders extends SpeakeasyBase {
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


export class DeregisterOrganizationAdminAccountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminAccountId" })
  adminAccountId?: string;
}


export class DeregisterOrganizationAdminAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterOrganizationAdminAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeregisterOrganizationAdminAccountRequestBody;
}


export class DeregisterOrganizationAdminAccountResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deregisterOrganizationAdminAccountResponse?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
