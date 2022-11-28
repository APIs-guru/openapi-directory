import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetTrailStatusXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatus = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus"
}


export class GetTrailStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetTrailStatusXAmzTargetEnum;
}


export class GetTrailStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetTrailStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetTrailStatusRequest;
}


export class GetTrailStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTrailStatusResponse?: shared.GetTrailStatusResponse;

  @SpeakeasyMetadata()
  invalidTrailNameException?: any;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trailNotFoundException?: any;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
