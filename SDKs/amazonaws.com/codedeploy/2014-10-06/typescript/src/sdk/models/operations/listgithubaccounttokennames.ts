import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListGitHubAccountTokenNamesXAmzTargetEnum {
    CodeDeploy20141006ListGitHubAccountTokenNames = "CodeDeploy_20141006.ListGitHubAccountTokenNames"
}


export class ListGitHubAccountTokenNamesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListGitHubAccountTokenNamesXAmzTargetEnum;
}


export class ListGitHubAccountTokenNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListGitHubAccountTokenNamesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListGitHubAccountTokenNamesInput;
}


export class ListGitHubAccountTokenNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  listGitHubAccountTokenNamesOutput?: shared.ListGitHubAccountTokenNamesOutput;

  @SpeakeasyMetadata()
  operationNotSupportedException?: any;

  @SpeakeasyMetadata()
  resourceValidationException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
