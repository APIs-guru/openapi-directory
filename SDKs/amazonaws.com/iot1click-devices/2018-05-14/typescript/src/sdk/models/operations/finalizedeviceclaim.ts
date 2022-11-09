import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FinalizeDeviceClaimPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;
}


export class FinalizeDeviceClaimHeaders extends SpeakeasyBase {
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
}


export class FinalizeDeviceClaimRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class FinalizeDeviceClaimRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FinalizeDeviceClaimPathParams;

  @Metadata()
  headers: FinalizeDeviceClaimHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: FinalizeDeviceClaimRequestBody;
}


export class FinalizeDeviceClaimResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  finalizeDeviceClaimResponse?: shared.FinalizeDeviceClaimResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
