import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetTestGridSessionXAmzTargetEnum {
    DeviceFarm20150623GetTestGridSession = "DeviceFarm_20150623.GetTestGridSession"
}


export class GetTestGridSessionHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetTestGridSessionXAmzTargetEnum;
}


export class GetTestGridSessionRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTestGridSessionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTestGridSessionRequest;
}


export class GetTestGridSessionResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getTestGridSessionResult?: shared.GetTestGridSessionResult;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
