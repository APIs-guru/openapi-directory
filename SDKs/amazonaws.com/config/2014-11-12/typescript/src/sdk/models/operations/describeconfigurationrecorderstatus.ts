import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeConfigurationRecorderStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationRecorderStatus = "StarlingDoveService.DescribeConfigurationRecorderStatus"
}


export class DescribeConfigurationRecorderStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConfigurationRecorderStatusXAmzTargetEnum;
}


export class DescribeConfigurationRecorderStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeConfigurationRecorderStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConfigurationRecorderStatusRequest;
}


export class DescribeConfigurationRecorderStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeConfigurationRecorderStatusResponse?: shared.DescribeConfigurationRecorderStatusResponse;

  @Metadata()
  noSuchConfigurationRecorderException?: any;

  @Metadata()
  statusCode: number;
}
