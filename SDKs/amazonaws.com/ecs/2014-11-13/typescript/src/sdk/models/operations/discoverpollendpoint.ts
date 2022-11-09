import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DiscoverPollEndpointXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DiscoverPollEndpoint = "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint"
}


export class DiscoverPollEndpointHeaders extends SpeakeasyBase {
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
  xAmzTarget: DiscoverPollEndpointXAmzTargetEnum;
}


export class DiscoverPollEndpointRequest extends SpeakeasyBase {
  @Metadata()
  headers: DiscoverPollEndpointHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DiscoverPollEndpointRequest;
}


export class DiscoverPollEndpointResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  discoverPollEndpointResponse?: shared.DiscoverPollEndpointResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
