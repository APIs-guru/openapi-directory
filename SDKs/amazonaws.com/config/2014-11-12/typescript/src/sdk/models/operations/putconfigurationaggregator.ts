import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutConfigurationAggregatorXAmzTargetEnum {
    StarlingDoveServicePutConfigurationAggregator = "StarlingDoveService.PutConfigurationAggregator"
}


export class PutConfigurationAggregatorHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutConfigurationAggregatorXAmzTargetEnum;
}


export class PutConfigurationAggregatorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutConfigurationAggregatorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutConfigurationAggregatorRequest;
}


export class PutConfigurationAggregatorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  invalidRoleException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  noAvailableOrganizationException?: any;

  @SpeakeasyMetadata()
  organizationAccessDeniedException?: any;

  @SpeakeasyMetadata()
  organizationAllFeaturesNotEnabledException?: any;

  @SpeakeasyMetadata()
  putConfigurationAggregatorResponse?: shared.PutConfigurationAggregatorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
