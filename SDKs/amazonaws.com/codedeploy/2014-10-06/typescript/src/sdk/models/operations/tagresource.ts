import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum TagResourceXAmzTargetEnum {
    CodeDeploy20141006TagResource = "CodeDeploy_20141006.TagResource"
}


export class TagResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: TagResourceXAmzTargetEnum;
}


export class TagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: TagResourceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TagResourceInput;
}


export class TagResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationDoesNotExistException?: any;

  @SpeakeasyMetadata()
  arnNotSupportedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deploymentConfigDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentGroupDoesNotExistException?: any;

  @SpeakeasyMetadata()
  invalidArnException?: any;

  @SpeakeasyMetadata()
  invalidTagsToAddException?: any;

  @SpeakeasyMetadata()
  resourceArnRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagRequiredException?: any;

  @SpeakeasyMetadata()
  tagResourceOutput?: Map<string, any>;
}
