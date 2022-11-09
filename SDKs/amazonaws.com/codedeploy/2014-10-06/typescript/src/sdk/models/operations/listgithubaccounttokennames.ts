import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListGitHubAccountTokenNamesXAmzTargetEnum {
    CodeDeploy20141006ListGitHubAccountTokenNames = "CodeDeploy_20141006.ListGitHubAccountTokenNames"
}


export class ListGitHubAccountTokenNamesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListGitHubAccountTokenNamesXAmzTargetEnum;
}


export class ListGitHubAccountTokenNamesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListGitHubAccountTokenNamesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListGitHubAccountTokenNamesInput;
}


export class ListGitHubAccountTokenNamesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listGitHubAccountTokenNamesOutput?: shared.ListGitHubAccountTokenNamesOutput;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceValidationException?: any;

  @Metadata()
  statusCode: number;
}
