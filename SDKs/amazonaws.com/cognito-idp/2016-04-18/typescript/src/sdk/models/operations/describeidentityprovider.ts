import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeIdentityProviderXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDescribeIdentityProvider = "AWSCognitoIdentityProviderService.DescribeIdentityProvider"
}


export class DescribeIdentityProviderHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeIdentityProviderXAmzTargetEnum;
}


export class DescribeIdentityProviderRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeIdentityProviderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeIdentityProviderRequest;
}


export class DescribeIdentityProviderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeIdentityProviderResponse?: shared.DescribeIdentityProviderResponse;

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
