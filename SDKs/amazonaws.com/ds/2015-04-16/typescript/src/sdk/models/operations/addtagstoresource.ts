import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddTagsToResourceXAmzTargetEnum {
    DirectoryService20150416AddTagsToResource = "DirectoryService_20150416.AddTagsToResource"
}


export class AddTagsToResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddTagsToResourceXAmzTargetEnum;
}


export class AddTagsToResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddTagsToResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddTagsToResourceRequest;
}


export class AddTagsToResourceResponse extends SpeakeasyBase {
  @Metadata()
  addTagsToResourceResult?: Map<string, any>;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagLimitExceededException?: any;
}
