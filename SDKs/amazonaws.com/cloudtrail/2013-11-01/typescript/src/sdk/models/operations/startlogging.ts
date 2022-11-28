import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartLoggingXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101StartLogging = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging"
}


export class StartLoggingHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartLoggingXAmzTargetEnum;
}


export class StartLoggingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartLoggingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartLoggingRequest;
}


export class StartLoggingResponse extends SpeakeasyBase {
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
  startLoggingResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trailNotFoundException?: any;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
