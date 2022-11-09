import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteLunaClientXAmzTargetEnum {
    CloudHsmFrontendServiceDeleteLunaClient = "CloudHsmFrontendService.DeleteLunaClient"
}


export class DeleteLunaClientHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteLunaClientXAmzTargetEnum;
}


export class DeleteLunaClientRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteLunaClientHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteLunaClientRequest;
}


export class DeleteLunaClientResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmInternalException?: any;

  @Metadata()
  cloudHsmServiceException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteLunaClientResponse?: shared.DeleteLunaClientResponse;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
