import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidateSecurityProfileBehaviorsHeaders extends SpeakeasyBase {
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


export class ValidateSecurityProfileBehaviorsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=behaviors", elemType: shared.Behavior })
  behaviors: shared.Behavior[];
}


export class ValidateSecurityProfileBehaviorsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ValidateSecurityProfileBehaviorsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ValidateSecurityProfileBehaviorsRequestBody;
}


export class ValidateSecurityProfileBehaviorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validateSecurityProfileBehaviorsResponse?: shared.ValidateSecurityProfileBehaviorsResponse;
}
