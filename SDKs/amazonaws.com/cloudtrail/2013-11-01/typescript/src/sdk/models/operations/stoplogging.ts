import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopLoggingXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101StopLogging = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging"
}


export class StopLoggingHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopLoggingXAmzTargetEnum;
}


export class StopLoggingRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopLoggingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopLoggingRequest;
}


export class StopLoggingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  insufficientDependencyServiceAccessPermissionException?: any;

  @Metadata()
  invalidHomeRegionException?: any;

  @Metadata()
  invalidTrailNameException?: any;

  @Metadata()
  notOrganizationMasterAccountException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopLoggingResponse?: Map<string, any>;

  @Metadata()
  trailNotFoundException?: any;

  @Metadata()
  unsupportedOperationException?: any;
}
