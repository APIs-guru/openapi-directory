import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CopyBackupToRegionXAmzTargetEnum {
    BaldrApiServiceCopyBackupToRegion = "BaldrApiService.CopyBackupToRegion"
}


export class CopyBackupToRegionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CopyBackupToRegionXAmzTargetEnum;
}


export class CopyBackupToRegionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CopyBackupToRegionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CopyBackupToRegionRequest;
}


export class CopyBackupToRegionResponse extends SpeakeasyBase {
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
  cloudHsmTagException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  copyBackupToRegionResponse?: shared.CopyBackupToRegionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
