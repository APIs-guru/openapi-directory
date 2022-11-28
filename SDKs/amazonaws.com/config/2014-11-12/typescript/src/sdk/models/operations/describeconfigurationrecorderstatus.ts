import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeConfigurationRecorderStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationRecorderStatus = "StarlingDoveService.DescribeConfigurationRecorderStatus"
}


export class DescribeConfigurationRecorderStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConfigurationRecorderStatusXAmzTargetEnum;
}


export class DescribeConfigurationRecorderStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeConfigurationRecorderStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConfigurationRecorderStatusRequest;
}


export class DescribeConfigurationRecorderStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeConfigurationRecorderStatusResponse?: shared.DescribeConfigurationRecorderStatusResponse;

  @SpeakeasyMetadata()
  noSuchConfigurationRecorderException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
