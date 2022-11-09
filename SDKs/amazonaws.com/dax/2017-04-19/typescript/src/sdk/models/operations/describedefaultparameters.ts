import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDefaultParametersXAmzTargetEnum {
    AmazonDaxv3DescribeDefaultParameters = "AmazonDAXV3.DescribeDefaultParameters"
}


export class DescribeDefaultParametersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDefaultParametersXAmzTargetEnum;
}


export class DescribeDefaultParametersRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDefaultParametersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDefaultParametersRequest;
}


export class DescribeDefaultParametersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDefaultParametersResponse?: shared.DescribeDefaultParametersResponse;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
