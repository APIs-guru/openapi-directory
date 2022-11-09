import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisableSsoXAmzTargetEnum {
    DirectoryService20150416DisableSso = "DirectoryService_20150416.DisableSso"
}


export class DisableSsoHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableSsoXAmzTargetEnum;
}


export class DisableSsoRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableSsoHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisableSsoRequest;
}


export class DisableSsoResponse extends SpeakeasyBase {
  @Metadata()
  authenticationFailedException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  disableSsoResult?: Map<string, any>;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  insufficientPermissionsException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
