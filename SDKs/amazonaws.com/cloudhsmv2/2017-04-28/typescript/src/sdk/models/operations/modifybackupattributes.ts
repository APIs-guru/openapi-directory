import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyBackupAttributesXAmzTargetEnum {
    BaldrApiServiceModifyBackupAttributes = "BaldrApiService.ModifyBackupAttributes"
}


export class ModifyBackupAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyBackupAttributesXAmzTargetEnum;
}


export class ModifyBackupAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyBackupAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyBackupAttributesRequest;
}


export class ModifyBackupAttributesResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmAccessDeniedException?: any;

  @Metadata()
  cloudHsmInternalFailureException?: any;

  @Metadata()
  cloudHsmInvalidRequestException?: any;

  @Metadata()
  cloudHsmResourceNotFoundException?: any;

  @Metadata()
  cloudHsmServiceException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  modifyBackupAttributesResponse?: shared.ModifyBackupAttributesResponse;

  @Metadata()
  statusCode: number;
}
