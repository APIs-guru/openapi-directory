import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePlayerSessionXAmzTargetEnum {
    GameLiftCreatePlayerSession = "GameLift.CreatePlayerSession"
}


export class CreatePlayerSessionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePlayerSessionXAmzTargetEnum;
}


export class CreatePlayerSessionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePlayerSessionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePlayerSessionInput;
}


export class CreatePlayerSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPlayerSessionOutput?: shared.CreatePlayerSessionOutput;

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
