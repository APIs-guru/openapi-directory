import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutEventSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101PutEventSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors"
}


export class PutEventSelectorsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutEventSelectorsXAmzTargetEnum;
}


export class PutEventSelectorsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutEventSelectorsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutEventSelectorsRequest;
}


export class PutEventSelectorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  insufficientDependencyServiceAccessPermissionException?: any;

  @Metadata()
  invalidEventSelectorsException?: any;

  @Metadata()
  invalidHomeRegionException?: any;

  @Metadata()
  invalidTrailNameException?: any;

  @Metadata()
  notOrganizationMasterAccountException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  putEventSelectorsResponse?: shared.PutEventSelectorsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  trailNotFoundException?: any;

  @Metadata()
  unsupportedOperationException?: any;
}
