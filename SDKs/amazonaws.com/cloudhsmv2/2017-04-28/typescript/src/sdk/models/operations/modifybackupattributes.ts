import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ModifyBackupAttributesXAmzTargetEnum {
    BaldrApiServiceModifyBackupAttributes = "BaldrApiService.ModifyBackupAttributes"
}


export class ModifyBackupAttributesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ModifyBackupAttributesXAmzTargetEnum;
}


export class ModifyBackupAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ModifyBackupAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ModifyBackupAttributesRequest;
}


export class ModifyBackupAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudHsmAccessDeniedException?: any;

  @SpeakeasyMetadata()
  cloudHsmInternalFailureException?: any;

  @SpeakeasyMetadata()
  cloudHsmInvalidRequestException?: any;

  @SpeakeasyMetadata()
  cloudHsmResourceNotFoundException?: any;

  @SpeakeasyMetadata()
  cloudHsmServiceException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  modifyBackupAttributesResponse?: shared.ModifyBackupAttributesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
