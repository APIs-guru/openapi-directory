import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutRemediationExceptionsXAmzTargetEnum {
    StarlingDoveServicePutRemediationExceptions = "StarlingDoveService.PutRemediationExceptions"
}


export class PutRemediationExceptionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutRemediationExceptionsXAmzTargetEnum;
}


export class PutRemediationExceptionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutRemediationExceptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutRemediationExceptionsRequest;
}


export class PutRemediationExceptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  insufficientPermissionsException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  putRemediationExceptionsResponse?: shared.PutRemediationExceptionsResponse;

  @Metadata()
  statusCode: number;
}
