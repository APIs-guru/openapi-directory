import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAuditSuppressionHeaders extends SpeakeasyBase {
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


// UpdateAuditSuppressionRequestBodyResourceIdentifier
/** 
 * Information that identifies the noncompliant resource.
**/
export class UpdateAuditSuppressionRequestBodyResourceIdentifier extends SpeakeasyBase {
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


export class UpdateAuditSuppressionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkName" })
  checkName: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier: UpdateAuditSuppressionRequestBodyResourceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=suppressIndefinitely" })
  suppressIndefinitely?: boolean;
}


export class UpdateAuditSuppressionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateAuditSuppressionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAuditSuppressionRequestBody;
}


export class UpdateAuditSuppressionResponse extends SpeakeasyBase {
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
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateAuditSuppressionResponse?: Map<string, any>;
}
