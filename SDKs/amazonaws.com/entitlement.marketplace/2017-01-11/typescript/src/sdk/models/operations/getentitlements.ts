import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetEntitlementsXAmzTargetEnum {
    AwsmpEntitlementServiceGetEntitlements = "AWSMPEntitlementService.GetEntitlements"
}


export class GetEntitlementsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetEntitlementsXAmzTargetEnum;
}


export class GetEntitlementsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetEntitlementsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetEntitlementsRequest;
}


export class GetEntitlementsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getEntitlementsResult?: shared.GetEntitlementsResult;

  @Metadata()
  internalServiceErrorException?: shared.InternalServiceErrorException;

  @Metadata()
  invalidParameterException?: shared.InvalidParameterException;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: shared.ThrottlingException;
}
