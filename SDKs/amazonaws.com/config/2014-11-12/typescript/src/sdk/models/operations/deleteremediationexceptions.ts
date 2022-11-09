import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteRemediationExceptionsXAmzTargetEnum {
    StarlingDoveServiceDeleteRemediationExceptions = "StarlingDoveService.DeleteRemediationExceptions"
}


export class DeleteRemediationExceptionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteRemediationExceptionsXAmzTargetEnum;
}


export class DeleteRemediationExceptionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteRemediationExceptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteRemediationExceptionsRequest;
}


export class DeleteRemediationExceptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteRemediationExceptionsResponse?: shared.DeleteRemediationExceptionsResponse;

  @Metadata()
  noSuchRemediationExceptionException?: any;

  @Metadata()
  statusCode: number;
}
