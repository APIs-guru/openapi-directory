import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLifecyclePolicyPreviewQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetLifecyclePolicyPreviewXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetLifecyclePolicyPreview = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview"
}


export class GetLifecyclePolicyPreviewHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetLifecyclePolicyPreviewXAmzTargetEnum;
}


export class GetLifecyclePolicyPreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLifecyclePolicyPreviewQueryParams;

  @SpeakeasyMetadata()
  headers: GetLifecyclePolicyPreviewHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetLifecyclePolicyPreviewRequest;
}


export class GetLifecyclePolicyPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLifecyclePolicyPreviewResponse?: shared.GetLifecyclePolicyPreviewResponse;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  lifecyclePolicyPreviewNotFoundException?: any;

  @SpeakeasyMetadata()
  repositoryNotFoundException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
