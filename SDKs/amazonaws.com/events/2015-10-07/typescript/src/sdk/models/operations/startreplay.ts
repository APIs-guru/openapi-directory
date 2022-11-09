import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartReplayXAmzTargetEnum {
    AwsEventsStartReplay = "AWSEvents.StartReplay"
}


export class StartReplayHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartReplayXAmzTargetEnum;
}


export class StartReplayRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartReplayHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartReplayRequest;
}


export class StartReplayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidEventPatternException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startReplayResponse?: shared.StartReplayResponse;

  @Metadata()
  statusCode: number;
}
