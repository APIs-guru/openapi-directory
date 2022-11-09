import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyLunaClientXAmzTargetEnum {
    CloudHsmFrontendServiceModifyLunaClient = "CloudHsmFrontendService.ModifyLunaClient"
}


export class ModifyLunaClientHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyLunaClientXAmzTargetEnum;
}


export class ModifyLunaClientRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyLunaClientHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyLunaClientRequest;
}


export class ModifyLunaClientResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmServiceException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  modifyLunaClientResponse?: shared.ModifyLunaClientResponse;

  @Metadata()
  statusCode: number;
}
