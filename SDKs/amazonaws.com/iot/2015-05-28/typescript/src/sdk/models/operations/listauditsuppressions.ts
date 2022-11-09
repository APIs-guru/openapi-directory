import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAuditSuppressionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListAuditSuppressionsHeaders extends SpeakeasyBase {
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


// ListAuditSuppressionsRequestBodyResourceIdentifier
/** 
 * Information that identifies the noncompliant resource.
**/
export class ListAuditSuppressionsRequestBodyResourceIdentifier extends SpeakeasyBase {
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


export class ListAuditSuppressionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ascendingOrder" })
  ascendingOrder?: boolean;

  @Metadata({ data: "json, name=checkName" })
  checkName?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier?: ListAuditSuppressionsRequestBodyResourceIdentifier;
}


export class ListAuditSuppressionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAuditSuppressionsQueryParams;

  @Metadata()
  headers: ListAuditSuppressionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListAuditSuppressionsRequestBody;
}


export class ListAuditSuppressionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listAuditSuppressionsResponse?: shared.ListAuditSuppressionsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
