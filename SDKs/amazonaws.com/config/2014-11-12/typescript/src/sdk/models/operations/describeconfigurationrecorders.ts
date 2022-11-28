import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeConfigurationRecordersXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationRecorders = "StarlingDoveService.DescribeConfigurationRecorders"
}


export class DescribeConfigurationRecordersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConfigurationRecordersXAmzTargetEnum;
}


export class DescribeConfigurationRecordersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeConfigurationRecordersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConfigurationRecordersRequest;
}


export class DescribeConfigurationRecordersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeConfigurationRecordersResponse?: shared.DescribeConfigurationRecordersResponse;

  @SpeakeasyMetadata()
  noSuchConfigurationRecorderException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
