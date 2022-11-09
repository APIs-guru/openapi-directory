import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetTrailStatusXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatus = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus"
}


export class GetTrailStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetTrailStatusXAmzTargetEnum;
}


export class GetTrailStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTrailStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTrailStatusRequest;
}


export class GetTrailStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTrailStatusResponse?: shared.GetTrailStatusResponse;

  @Metadata()
  invalidTrailNameException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  trailNotFoundException?: any;

  @Metadata()
  unsupportedOperationException?: any;
}
