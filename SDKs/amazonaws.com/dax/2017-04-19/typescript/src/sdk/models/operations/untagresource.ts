import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UntagResourceXAmzTargetEnum {
    AmazonDaxv3UntagResource = "AmazonDAXV3.UntagResource"
}


export class UntagResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: UntagResourceXAmzTargetEnum;
}


export class UntagResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: UntagResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UntagResourceRequest;
}


export class UntagResourceResponse extends SpeakeasyBase {
  @Metadata()
  clusterNotFoundFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidArnFault?: any;

  @Metadata()
  invalidClusterStateFault?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagNotFoundFault?: any;

  @Metadata()
  untagResourceResponse?: shared.UntagResourceResponse;
}
