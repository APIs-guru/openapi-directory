import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteConnectionXAmzTargetEnum {
    AppRunnerDeleteConnection = "AppRunner.DeleteConnection"
}


export class DeleteConnectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteConnectionXAmzTargetEnum;
}


export class DeleteConnectionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteConnectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteConnectionRequest;
}


export class DeleteConnectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteConnectionResponse?: shared.DeleteConnectionResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
