import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutAttributesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutAttributes = "AmazonEC2ContainerServiceV20141113.PutAttributes"
}


export class PutAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutAttributesXAmzTargetEnum;
}


export class PutAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutAttributesRequest;
}


export class PutAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeLimitExceededException?: any;

  @SpeakeasyMetadata()
  clusterNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  putAttributesResponse?: shared.PutAttributesResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  targetNotFoundException?: any;
}
