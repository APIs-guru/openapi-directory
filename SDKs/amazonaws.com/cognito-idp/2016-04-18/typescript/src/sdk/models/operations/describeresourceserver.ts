import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeResourceServerXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDescribeResourceServer = "AWSCognitoIdentityProviderService.DescribeResourceServer"
}


export class DescribeResourceServerHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeResourceServerXAmzTargetEnum;
}


export class DescribeResourceServerRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeResourceServerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeResourceServerRequest;
}


export class DescribeResourceServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeResourceServerResponse?: shared.DescribeResourceServerResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
