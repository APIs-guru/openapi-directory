import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail"
}


export class GetTrailHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetTrailXAmzTargetEnum;
}


export class GetTrailRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTrailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTrailRequest;
}


export class GetTrailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTrailResponse?: shared.GetTrailResponse;

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
