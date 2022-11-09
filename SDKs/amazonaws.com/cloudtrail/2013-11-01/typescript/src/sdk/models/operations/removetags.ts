import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RemoveTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags"
}


export class RemoveTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: RemoveTagsXAmzTargetEnum;
}


export class RemoveTagsRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveTagsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RemoveTagsRequest;
}


export class RemoveTagsResponse extends SpeakeasyBase {
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
  removeTagsResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceTypeNotSupportedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
