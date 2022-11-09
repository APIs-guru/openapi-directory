import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetEventSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors"
}


export class GetEventSelectorsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetEventSelectorsXAmzTargetEnum;
}


export class GetEventSelectorsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetEventSelectorsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetEventSelectorsRequest;
}


export class GetEventSelectorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getEventSelectorsResponse?: shared.GetEventSelectorsResponse;

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
