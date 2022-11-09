import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateConfigurationItemsToApplicationXAmzTargetEnum {
    AwsPoseidonServiceV20151101AssociateConfigurationItemsToApplication = "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication"
}


export class AssociateConfigurationItemsToApplicationHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateConfigurationItemsToApplicationXAmzTargetEnum;
}


export class AssociateConfigurationItemsToApplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateConfigurationItemsToApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateConfigurationItemsToApplicationRequest;
}


export class AssociateConfigurationItemsToApplicationResponse extends SpeakeasyBase {
  @Metadata()
  associateConfigurationItemsToApplicationResponse?: Map<string, any>;

  @Metadata()
  authorizationErrorException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  homeRegionNotSetException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  serverInternalErrorException?: any;

  @Metadata()
  statusCode: number;
}
