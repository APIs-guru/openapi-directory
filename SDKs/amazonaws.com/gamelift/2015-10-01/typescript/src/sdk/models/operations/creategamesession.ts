import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateGameSessionXAmzTargetEnum {
    GameLiftCreateGameSession = "GameLift.CreateGameSession"
}


export class CreateGameSessionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateGameSessionXAmzTargetEnum;
}


export class CreateGameSessionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateGameSessionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateGameSessionInput;
}


export class CreateGameSessionResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createGameSessionOutput?: shared.CreateGameSessionOutput;

  @Metadata()
  fleetCapacityExceededException?: any;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidFleetStatusException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  terminalRoutingStrategyException?: any;

  @Metadata()
  unauthorizedException?: any;
}
