import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateMatchmakingRuleSetXAmzTargetEnum {
    GameLiftCreateMatchmakingRuleSet = "GameLift.CreateMatchmakingRuleSet"
}


export class CreateMatchmakingRuleSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateMatchmakingRuleSetXAmzTargetEnum;
}


export class CreateMatchmakingRuleSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateMatchmakingRuleSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateMatchmakingRuleSetInput;
}


export class CreateMatchmakingRuleSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createMatchmakingRuleSetOutput?: shared.CreateMatchmakingRuleSetOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taggingFailedException?: any;

  @Metadata()
  unsupportedRegionException?: any;
}
