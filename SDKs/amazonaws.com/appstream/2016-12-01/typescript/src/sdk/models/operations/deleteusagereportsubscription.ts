import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeleteUsageReportSubscriptionXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteUsageReportSubscription = "PhotonAdminProxyService.DeleteUsageReportSubscription"
}


export class DeleteUsageReportSubscriptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteUsageReportSubscriptionXAmzTargetEnum;
}


export class DeleteUsageReportSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteUsageReportSubscriptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DeleteUsageReportSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteUsageReportSubscriptionResult?: Map<string, any>;

  @Metadata()
  invalidAccountStatusException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
