import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateGameSessionQueueXAmzTargetEnum {
    GameLiftCreateGameSessionQueue = "GameLift.CreateGameSessionQueue"
}


export class CreateGameSessionQueueHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateGameSessionQueueXAmzTargetEnum;
}


export class CreateGameSessionQueueRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateGameSessionQueueHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateGameSessionQueueInput;
}


export class CreateGameSessionQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createGameSessionQueueOutput?: shared.CreateGameSessionQueueOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taggingFailedException?: any;

  @Metadata()
  unauthorizedException?: any;
}
