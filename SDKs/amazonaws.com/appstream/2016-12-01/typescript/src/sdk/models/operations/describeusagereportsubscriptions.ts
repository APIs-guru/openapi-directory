import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeUsageReportSubscriptionsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeUsageReportSubscriptions = "PhotonAdminProxyService.DescribeUsageReportSubscriptions"
}


export class DescribeUsageReportSubscriptionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeUsageReportSubscriptionsXAmzTargetEnum;
}


export class DescribeUsageReportSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeUsageReportSubscriptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeUsageReportSubscriptionsRequest;
}


export class DescribeUsageReportSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeUsageReportSubscriptionsResult?: shared.DescribeUsageReportSubscriptionsResult;

  @Metadata()
  invalidAccountStatusException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
