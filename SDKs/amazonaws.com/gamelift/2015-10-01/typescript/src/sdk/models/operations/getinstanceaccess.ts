import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetInstanceAccessXAmzTargetEnum {
    GameLiftGetInstanceAccess = "GameLift.GetInstanceAccess"
}


export class GetInstanceAccessHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetInstanceAccessXAmzTargetEnum;
}


export class GetInstanceAccessRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetInstanceAccessHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetInstanceAccessInput;
}


export class GetInstanceAccessResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstanceAccessOutput?: shared.GetInstanceAccessOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
