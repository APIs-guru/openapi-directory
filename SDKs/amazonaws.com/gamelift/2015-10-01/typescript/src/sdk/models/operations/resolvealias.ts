import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ResolveAliasXAmzTargetEnum {
    GameLiftResolveAlias = "GameLift.ResolveAlias"
}


export class ResolveAliasHeaders extends SpeakeasyBase {
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
  xAmzTarget: ResolveAliasXAmzTargetEnum;
}


export class ResolveAliasRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResolveAliasHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResolveAliasInput;
}


export class ResolveAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  resolveAliasOutput?: shared.ResolveAliasOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  terminalRoutingStrategyException?: any;

  @Metadata()
  unauthorizedException?: any;
}
