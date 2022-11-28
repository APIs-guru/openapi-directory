import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteGitHubAccountTokenXAmzTargetEnum {
    CodeDeploy20141006DeleteGitHubAccountToken = "CodeDeploy_20141006.DeleteGitHubAccountToken"
}


export class DeleteGitHubAccountTokenHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeleteGitHubAccountTokenXAmzTargetEnum;
}


export class DeleteGitHubAccountTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteGitHubAccountTokenHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteGitHubAccountTokenInput;
}


export class DeleteGitHubAccountTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteGitHubAccountTokenOutput?: shared.DeleteGitHubAccountTokenOutput;

  @SpeakeasyMetadata()
  gitHubAccountTokenDoesNotExistException?: any;

  @SpeakeasyMetadata()
  gitHubAccountTokenNameRequiredException?: any;

  @SpeakeasyMetadata()
  invalidGitHubAccountTokenNameException?: any;

  @SpeakeasyMetadata()
  operationNotSupportedException?: any;

  @SpeakeasyMetadata()
  resourceValidationException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
