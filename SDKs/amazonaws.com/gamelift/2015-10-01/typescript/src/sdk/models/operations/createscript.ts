import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateScriptXAmzTargetEnum {
    GameLiftCreateScript = "GameLift.CreateScript"
}


export class CreateScriptHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateScriptXAmzTargetEnum;
}


export class CreateScriptRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateScriptHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateScriptInput;
}


export class CreateScriptResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createScriptOutput?: shared.CreateScriptOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taggingFailedException?: any;

  @Metadata()
  unauthorizedException?: any;
}
