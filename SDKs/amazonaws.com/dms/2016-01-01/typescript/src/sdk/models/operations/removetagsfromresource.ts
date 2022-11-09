import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RemoveTagsFromResourceXAmzTargetEnum {
    AmazonDmSv20160101RemoveTagsFromResource = "AmazonDMSv20160101.RemoveTagsFromResource"
}


export class RemoveTagsFromResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: RemoveTagsFromResourceXAmzTargetEnum;
}


export class RemoveTagsFromResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveTagsFromResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RemoveTagsFromResourceMessage;
}


export class RemoveTagsFromResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  removeTagsFromResourceResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
