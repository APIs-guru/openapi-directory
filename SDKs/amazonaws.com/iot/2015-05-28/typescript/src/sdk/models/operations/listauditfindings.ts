import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAuditFindingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListAuditFindingsHeaders extends SpeakeasyBase {
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


// ListAuditFindingsRequestBodyResourceIdentifier
/** 
 * Information that identifies the noncompliant resource.
**/
export class ListAuditFindingsRequestBodyResourceIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: string;

  @Metadata({ data: "json, name=caCertificateId" })
  caCertificateId?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=cognitoIdentityPoolId" })
  cognitoIdentityPoolId?: string;

  @Metadata({ data: "json, name=deviceCertificateId" })
  deviceCertificateId?: string;

  @Metadata({ data: "json, name=iamRoleArn" })
  iamRoleArn?: string;

  @Metadata({ data: "json, name=policyVersionIdentifier" })
  policyVersionIdentifier?: shared.PolicyVersionIdentifier;

  @Metadata({ data: "json, name=roleAliasArn" })
  roleAliasArn?: string;
}


export class ListAuditFindingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkName" })
  checkName?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=listSuppressedFindings" })
  listSuppressedFindings?: boolean;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier?: ListAuditFindingsRequestBodyResourceIdentifier;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}


export class ListAuditFindingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAuditFindingsQueryParams;

  @Metadata()
  headers: ListAuditFindingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListAuditFindingsRequestBody;
}


export class ListAuditFindingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listAuditFindingsResponse?: shared.ListAuditFindingsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
