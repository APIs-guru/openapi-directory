import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnableLdapsxAmzTargetEnum {
    DirectoryService20150416EnableLdaps = "DirectoryService_20150416.EnableLDAPS"
}


export class EnableLdapsHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableLdapsxAmzTargetEnum;
}


export class EnableLdapsRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableLdapsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EnableLdapsRequest;
}


export class EnableLdapsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryDoesNotExistException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  enableLdapsResult?: Map<string, any>;

  @Metadata()
  invalidLdapsStatusException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  noAvailableCertificateException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
