import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddTagsToCertificateXAmzTargetEnum {
    CertificateManagerAddTagsToCertificate = "CertificateManager.AddTagsToCertificate"
}


export class AddTagsToCertificateHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: AddTagsToCertificateXAmzTargetEnum;
}


export class AddTagsToCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddTagsToCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddTagsToCertificateRequest;
}


export class AddTagsToCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidTagException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagPolicyException?: any;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  tooManyTagsException?: any;
}
