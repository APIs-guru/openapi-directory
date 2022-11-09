import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ConnectDirectoryXAmzTargetEnum {
    DirectoryService20150416ConnectDirectory = "DirectoryService_20150416.ConnectDirectory"
}


export class ConnectDirectoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: ConnectDirectoryXAmzTargetEnum;
}


export class ConnectDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: ConnectDirectoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConnectDirectoryRequest;
}


export class ConnectDirectoryResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  connectDirectoryResult?: shared.ConnectDirectoryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryLimitExceededException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
