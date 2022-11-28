import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidateSecurityProfileBehaviorsHeaders extends SpeakeasyBase {
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


export class ValidateSecurityProfileBehaviorsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=behaviors", elemType: shared.Behavior })
  behaviors: shared.Behavior[];
}


export class ValidateSecurityProfileBehaviorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ValidateSecurityProfileBehaviorsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ValidateSecurityProfileBehaviorsRequestBody;
}


export class ValidateSecurityProfileBehaviorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validateSecurityProfileBehaviorsResponse?: shared.ValidateSecurityProfileBehaviorsResponse;
}
