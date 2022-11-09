import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101AddTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags"
}


export class AddTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddTagsXAmzTargetEnum;
}


export class AddTagsRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddTagsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddTagsRequest;
}


export class AddTagsResponse extends SpeakeasyBase {
  @Metadata()
  addTagsResponse?: Map<string, any>;

  @Metadata()
  cloudTrailArnInvalidException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidTagParameterException?: any;

  @Metadata()
  invalidTrailNameException?: any;

  @Metadata()
  notOrganizationMasterAccountException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceTypeNotSupportedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagsLimitExceededException?: any;

  @Metadata()
  unsupportedOperationException?: any;
}
