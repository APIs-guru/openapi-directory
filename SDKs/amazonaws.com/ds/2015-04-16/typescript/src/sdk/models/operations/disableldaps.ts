import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisableLdapsxAmzTargetEnum {
    DirectoryService20150416DisableLdaps = "DirectoryService_20150416.DisableLDAPS"
}


export class DisableLdapsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableLdapsxAmzTargetEnum;
}


export class DisableLdapsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableLdapsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisableLdapsRequest;
}


export class DisableLdapsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryDoesNotExistException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  disableLdapsResult?: Map<string, any>;

  @Metadata()
  invalidLdapsStatusException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
