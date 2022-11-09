import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddTagsToResourceXAmzTargetEnum {
    AmazonDmSv20160101AddTagsToResource = "AmazonDMSv20160101.AddTagsToResource"
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
  request: shared.AddTagsToResourceMessage;
}


export class AddTagsToResourceResponse extends SpeakeasyBase {
  @Metadata()
  addTagsToResourceResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
