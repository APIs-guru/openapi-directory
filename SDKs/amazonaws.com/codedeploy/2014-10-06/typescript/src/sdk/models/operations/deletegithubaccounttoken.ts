import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteGitHubAccountTokenXAmzTargetEnum {
    CodeDeploy20141006DeleteGitHubAccountToken = "CodeDeploy_20141006.DeleteGitHubAccountToken"
}


export class DeleteGitHubAccountTokenHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteGitHubAccountTokenXAmzTargetEnum;
}


export class DeleteGitHubAccountTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteGitHubAccountTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteGitHubAccountTokenInput;
}


export class DeleteGitHubAccountTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteGitHubAccountTokenOutput?: shared.DeleteGitHubAccountTokenOutput;

  @Metadata()
  gitHubAccountTokenDoesNotExistException?: any;

  @Metadata()
  gitHubAccountTokenNameRequiredException?: any;

  @Metadata()
  invalidGitHubAccountTokenNameException?: any;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceValidationException?: any;

  @Metadata()
  statusCode: number;
}
