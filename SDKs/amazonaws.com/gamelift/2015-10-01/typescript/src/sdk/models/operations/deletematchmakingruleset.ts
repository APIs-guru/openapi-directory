import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteMatchmakingRuleSetXAmzTargetEnum {
    GameLiftDeleteMatchmakingRuleSet = "GameLift.DeleteMatchmakingRuleSet"
}


export class DeleteMatchmakingRuleSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteMatchmakingRuleSetXAmzTargetEnum;
}


export class DeleteMatchmakingRuleSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteMatchmakingRuleSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteMatchmakingRuleSetInput;
}


export class DeleteMatchmakingRuleSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteMatchmakingRuleSetOutput?: Map<string, any>;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taggingFailedException?: any;

  @Metadata()
  unsupportedRegionException?: any;
}
