import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePlayerSessionsXAmzTargetEnum {
    GameLiftCreatePlayerSessions = "GameLift.CreatePlayerSessions"
}


export class CreatePlayerSessionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePlayerSessionsXAmzTargetEnum;
}


export class CreatePlayerSessionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePlayerSessionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePlayerSessionsInput;
}


export class CreatePlayerSessionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPlayerSessionsOutput?: shared.CreatePlayerSessionsOutput;

  @Metadata()
  gameSessionFullException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidGameSessionStatusException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  terminalRoutingStrategyException?: any;

  @Metadata()
  unauthorizedException?: any;
}
