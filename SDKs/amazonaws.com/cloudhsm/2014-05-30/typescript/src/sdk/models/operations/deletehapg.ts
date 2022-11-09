import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteHapgXAmzTargetEnum {
    CloudHsmFrontendServiceDeleteHapg = "CloudHsmFrontendService.DeleteHapg"
}


export class DeleteHapgHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteHapgXAmzTargetEnum;
}


export class DeleteHapgRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteHapgHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteHapgRequest;
}


export class DeleteHapgResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmInternalException?: any;

  @Metadata()
  cloudHsmServiceException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteHapgResponse?: shared.DeleteHapgResponse;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
