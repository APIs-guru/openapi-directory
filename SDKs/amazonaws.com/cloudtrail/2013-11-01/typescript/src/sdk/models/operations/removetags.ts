import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RemoveTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags"
}


export class RemoveTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: RemoveTagsXAmzTargetEnum;
}


export class RemoveTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RemoveTagsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RemoveTagsRequest;
}


export class RemoveTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudTrailArnInvalidException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidTagParameterException?: any;

  @SpeakeasyMetadata()
  invalidTrailNameException?: any;

  @SpeakeasyMetadata()
  notOrganizationMasterAccountException?: any;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  removeTagsResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  resourceTypeNotSupportedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
