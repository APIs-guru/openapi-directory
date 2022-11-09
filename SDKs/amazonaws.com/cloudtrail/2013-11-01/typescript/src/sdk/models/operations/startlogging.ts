import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartLoggingXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101StartLogging = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging"
}


export class StartLoggingHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartLoggingXAmzTargetEnum;
}


export class StartLoggingRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartLoggingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartLoggingRequest;
}


export class StartLoggingResponse extends SpeakeasyBase {
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
  startLoggingResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  trailNotFoundException?: any;

  @Metadata()
  unsupportedOperationException?: any;
}
