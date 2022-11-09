import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLifecyclePolicyPreviewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetLifecyclePolicyPreviewXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetLifecyclePolicyPreview = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview"
}


export class GetLifecyclePolicyPreviewHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetLifecyclePolicyPreviewXAmzTargetEnum;
}


export class GetLifecyclePolicyPreviewRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLifecyclePolicyPreviewQueryParams;

  @Metadata()
  headers: GetLifecyclePolicyPreviewHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetLifecyclePolicyPreviewRequest;
}


export class GetLifecyclePolicyPreviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLifecyclePolicyPreviewResponse?: shared.GetLifecyclePolicyPreviewResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  lifecyclePolicyPreviewNotFoundException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
