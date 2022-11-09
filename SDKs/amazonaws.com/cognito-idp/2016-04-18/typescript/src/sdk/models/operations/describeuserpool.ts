import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeUserPoolXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDescribeUserPool = "AWSCognitoIdentityProviderService.DescribeUserPool"
}


export class DescribeUserPoolHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeUserPoolXAmzTargetEnum;
}


export class DescribeUserPoolRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeUserPoolHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeUserPoolRequest;
}


export class DescribeUserPoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeUserPoolResponse?: shared.DescribeUserPoolResponse;

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

  @Metadata()
  userPoolTaggingException?: any;
}
