import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum InstallToRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623InstallToRemoteAccessSession = "DeviceFarm_20150623.InstallToRemoteAccessSession"
}


export class InstallToRemoteAccessSessionHeaders extends SpeakeasyBase {
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
  xAmzTarget: InstallToRemoteAccessSessionXAmzTargetEnum;
}


export class InstallToRemoteAccessSessionRequest extends SpeakeasyBase {
  @Metadata()
  headers: InstallToRemoteAccessSessionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InstallToRemoteAccessSessionRequest;
}


export class InstallToRemoteAccessSessionResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  installToRemoteAccessSessionResult?: shared.InstallToRemoteAccessSessionResult;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}
