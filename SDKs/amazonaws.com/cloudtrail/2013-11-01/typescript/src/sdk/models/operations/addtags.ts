import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101AddTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags"
}


export class AddTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddTagsXAmzTargetEnum;
}


export class AddTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddTagsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddTagsRequest;
}


export class AddTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addTagsResponse?: Map<string, any>;

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
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  resourceTypeNotSupportedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagsLimitExceededException?: any;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
