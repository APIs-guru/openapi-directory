import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutAttributesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutAttributes = "AmazonEC2ContainerServiceV20141113.PutAttributes"
}


export class PutAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutAttributesXAmzTargetEnum;
}


export class PutAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutAttributesRequest;
}


export class PutAttributesResponse extends SpeakeasyBase {
  @Metadata()
  attributeLimitExceededException?: any;

  @Metadata()
  clusterNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  putAttributesResponse?: shared.PutAttributesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  targetNotFoundException?: any;
}
