import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteAttributesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteAttributes = "AmazonEC2ContainerServiceV20141113.DeleteAttributes"
}


export class DeleteAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteAttributesXAmzTargetEnum;
}


export class DeleteAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteAttributesRequest;
}


export class DeleteAttributesResponse extends SpeakeasyBase {
  @Metadata()
  clusterNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteAttributesResponse?: shared.DeleteAttributesResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  targetNotFoundException?: any;
}
