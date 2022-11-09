import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CopyBackupToRegionXAmzTargetEnum {
    BaldrApiServiceCopyBackupToRegion = "BaldrApiService.CopyBackupToRegion"
}


export class CopyBackupToRegionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CopyBackupToRegionXAmzTargetEnum;
}


export class CopyBackupToRegionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CopyBackupToRegionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CopyBackupToRegionRequest;
}


export class CopyBackupToRegionResponse extends SpeakeasyBase {
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
  cloudHsmTagException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  copyBackupToRegionResponse?: shared.CopyBackupToRegionResponse;

  @Metadata()
  statusCode: number;
}
