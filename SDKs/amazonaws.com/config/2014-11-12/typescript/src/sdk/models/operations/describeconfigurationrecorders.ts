import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeConfigurationRecordersXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationRecorders = "StarlingDoveService.DescribeConfigurationRecorders"
}


export class DescribeConfigurationRecordersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConfigurationRecordersXAmzTargetEnum;
}


export class DescribeConfigurationRecordersRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeConfigurationRecordersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConfigurationRecordersRequest;
}


export class DescribeConfigurationRecordersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeConfigurationRecordersResponse?: shared.DescribeConfigurationRecordersResponse;

  @Metadata()
  noSuchConfigurationRecorderException?: any;

  @Metadata()
  statusCode: number;
}
