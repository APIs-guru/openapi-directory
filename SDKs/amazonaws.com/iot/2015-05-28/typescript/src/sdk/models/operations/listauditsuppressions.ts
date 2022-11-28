import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAuditSuppressionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListAuditSuppressionsHeaders extends SpeakeasyBase {
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


// ListAuditSuppressionsRequestBodyResourceIdentifier
/** 
 * Information that identifies the noncompliant resource.
**/
export class ListAuditSuppressionsRequestBodyResourceIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=caCertificateId" })
  caCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=cognitoIdentityPoolId" })
  cognitoIdentityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceCertificateId" })
  deviceCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=iamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=policyVersionIdentifier" })
  policyVersionIdentifier?: shared.PolicyVersionIdentifier;

  @SpeakeasyMetadata({ data: "json, name=roleAliasArn" })
  roleAliasArn?: string;
}


export class ListAuditSuppressionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ascendingOrder" })
  ascendingOrder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=checkName" })
  checkName?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier?: ListAuditSuppressionsRequestBodyResourceIdentifier;
}


export class ListAuditSuppressionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAuditSuppressionsQueryParams;

  @SpeakeasyMetadata()
  headers: ListAuditSuppressionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListAuditSuppressionsRequestBody;
}


export class ListAuditSuppressionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  listAuditSuppressionsResponse?: shared.ListAuditSuppressionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
