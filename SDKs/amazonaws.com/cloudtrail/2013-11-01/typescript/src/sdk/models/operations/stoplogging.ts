import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StopLoggingXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101StopLogging = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging"
}


export class StopLoggingHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopLoggingXAmzTargetEnum;
}


export class StopLoggingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StopLoggingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StopLoggingRequest;
}


export class StopLoggingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insufficientDependencyServiceAccessPermissionException?: any;

  @SpeakeasyMetadata()
  invalidHomeRegionException?: any;

  @SpeakeasyMetadata()
  invalidTrailNameException?: any;

  @SpeakeasyMetadata()
  notOrganizationMasterAccountException?: any;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopLoggingResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  trailNotFoundException?: any;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
