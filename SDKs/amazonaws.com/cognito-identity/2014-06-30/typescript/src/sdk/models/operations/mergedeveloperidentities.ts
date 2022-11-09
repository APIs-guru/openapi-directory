import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum MergeDeveloperIdentitiesXAmzTargetEnum {
    AwsCognitoIdentityServiceMergeDeveloperIdentities = "AWSCognitoIdentityService.MergeDeveloperIdentities"
}


export class MergeDeveloperIdentitiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: MergeDeveloperIdentitiesXAmzTargetEnum;
}


export class MergeDeveloperIdentitiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: MergeDeveloperIdentitiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MergeDeveloperIdentitiesInput;
}


export class MergeDeveloperIdentitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  mergeDeveloperIdentitiesResponse?: shared.MergeDeveloperIdentitiesResponse;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
