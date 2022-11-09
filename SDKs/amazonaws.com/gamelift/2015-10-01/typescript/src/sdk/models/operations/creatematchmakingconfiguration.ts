import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateMatchmakingConfigurationXAmzTargetEnum {
    GameLiftCreateMatchmakingConfiguration = "GameLift.CreateMatchmakingConfiguration"
}


export class CreateMatchmakingConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateMatchmakingConfigurationXAmzTargetEnum;
}


export class CreateMatchmakingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateMatchmakingConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateMatchmakingConfigurationInput;
}


export class CreateMatchmakingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createMatchmakingConfigurationOutput?: shared.CreateMatchmakingConfigurationOutput;

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
  unsupportedRegionException?: any;
}
