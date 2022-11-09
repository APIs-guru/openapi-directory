import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutConfigurationAggregatorXAmzTargetEnum {
    StarlingDoveServicePutConfigurationAggregator = "StarlingDoveService.PutConfigurationAggregator"
}


export class PutConfigurationAggregatorHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutConfigurationAggregatorXAmzTargetEnum;
}


export class PutConfigurationAggregatorRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutConfigurationAggregatorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutConfigurationAggregatorRequest;
}


export class PutConfigurationAggregatorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  invalidRoleException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  noAvailableOrganizationException?: any;

  @Metadata()
  organizationAccessDeniedException?: any;

  @Metadata()
  organizationAllFeaturesNotEnabledException?: any;

  @Metadata()
  putConfigurationAggregatorResponse?: shared.PutConfigurationAggregatorResponse;

  @Metadata()
  statusCode: number;
}
