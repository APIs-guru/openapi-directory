import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdminListGroupsForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum AdminListGroupsForUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminListGroupsForUser = "AWSCognitoIdentityProviderService.AdminListGroupsForUser"
}


export class AdminListGroupsForUserHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminListGroupsForUserXAmzTargetEnum;
}


export class AdminListGroupsForUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AdminListGroupsForUserQueryParams;

  @Metadata()
  headers: AdminListGroupsForUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AdminListGroupsForUserRequest;
}


export class AdminListGroupsForUserResponse extends SpeakeasyBase {
  @Metadata()
  adminListGroupsForUserResponse?: shared.AdminListGroupsForUserResponse;

  @Metadata()
  contentType: string;

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
  userNotFoundException?: any;
}
