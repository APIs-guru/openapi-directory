import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAuditSuppressionHeaders extends SpeakeasyBase {
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


// CreateAuditSuppressionRequestBodyResourceIdentifier
/** 
 * Information that identifies the noncompliant resource.
**/
export class CreateAuditSuppressionRequestBodyResourceIdentifier extends SpeakeasyBase {
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


export class CreateAuditSuppressionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkName" })
  checkName: string;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=resourceIdentifier" })
  resourceIdentifier: CreateAuditSuppressionRequestBodyResourceIdentifier;

  @Metadata({ data: "json, name=suppressIndefinitely" })
  suppressIndefinitely?: boolean;
}


export class CreateAuditSuppressionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAuditSuppressionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAuditSuppressionRequestBody;
}


export class CreateAuditSuppressionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createAuditSuppressionResponse?: Map<string, any>;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
