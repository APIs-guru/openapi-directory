import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeExportConfigurationsXAmzTargetEnum {
    AwsPoseidonServiceV20151101DescribeExportConfigurations = "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations"
}


export class DescribeExportConfigurationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeExportConfigurationsXAmzTargetEnum;
}


export class DescribeExportConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeExportConfigurationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeExportConfigurationsRequest;
}


export class DescribeExportConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  authorizationErrorException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeExportConfigurationsResponse?: shared.DescribeExportConfigurationsResponse;

  @Metadata()
  homeRegionNotSetException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serverInternalErrorException?: any;

  @Metadata()
  statusCode: number;
}
