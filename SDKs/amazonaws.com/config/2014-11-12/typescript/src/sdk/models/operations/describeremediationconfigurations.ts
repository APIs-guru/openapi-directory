import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeRemediationConfigurationsXAmzTargetEnum {
    StarlingDoveServiceDescribeRemediationConfigurations = "StarlingDoveService.DescribeRemediationConfigurations"
}


export class DescribeRemediationConfigurationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeRemediationConfigurationsXAmzTargetEnum;
}


export class DescribeRemediationConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeRemediationConfigurationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeRemediationConfigurationsRequest;
}


export class DescribeRemediationConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeRemediationConfigurationsResponse?: shared.DescribeRemediationConfigurationsResponse;

  @Metadata()
  statusCode: number;
}
