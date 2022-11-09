import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateConditionalForwarderXAmzTargetEnum {
    DirectoryService20150416UpdateConditionalForwarder = "DirectoryService_20150416.UpdateConditionalForwarder"
}


export class UpdateConditionalForwarderHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateConditionalForwarderXAmzTargetEnum;
}


export class UpdateConditionalForwarderRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateConditionalForwarderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateConditionalForwarderRequest;
}


export class UpdateConditionalForwarderResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;

  @Metadata()
  updateConditionalForwarderResult?: Map<string, any>;
}
