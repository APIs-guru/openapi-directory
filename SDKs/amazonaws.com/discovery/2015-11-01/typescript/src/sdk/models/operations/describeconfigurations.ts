import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeConfigurationsXAmzTargetEnum {
    AwsPoseidonServiceV20151101DescribeConfigurations = "AWSPoseidonService_V2015_11_01.DescribeConfigurations"
}


export class DescribeConfigurationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConfigurationsXAmzTargetEnum;
}


export class DescribeConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeConfigurationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConfigurationsRequest;
}


export class DescribeConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorizationErrorException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeConfigurationsResponse?: shared.DescribeConfigurationsResponse;

  @SpeakeasyMetadata()
  homeRegionNotSetException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  serverInternalErrorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
