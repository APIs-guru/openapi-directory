import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCapacityProvidersXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeCapacityProviders = "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders"
}


export class DescribeCapacityProvidersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCapacityProvidersXAmzTargetEnum;
}


export class DescribeCapacityProvidersRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCapacityProvidersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCapacityProvidersRequest;
}


export class DescribeCapacityProvidersResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeCapacityProvidersResponse?: shared.DescribeCapacityProvidersResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
