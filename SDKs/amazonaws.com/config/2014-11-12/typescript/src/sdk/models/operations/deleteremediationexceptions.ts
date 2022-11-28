import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteRemediationExceptionsXAmzTargetEnum {
    StarlingDoveServiceDeleteRemediationExceptions = "StarlingDoveService.DeleteRemediationExceptions"
}


export class DeleteRemediationExceptionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteRemediationExceptionsXAmzTargetEnum;
}


export class DeleteRemediationExceptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteRemediationExceptionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteRemediationExceptionsRequest;
}


export class DeleteRemediationExceptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteRemediationExceptionsResponse?: shared.DeleteRemediationExceptionsResponse;

  @SpeakeasyMetadata()
  noSuchRemediationExceptionException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
