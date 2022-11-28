import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetComplianceSummaryByResourceTypeXAmzTargetEnum {
    StarlingDoveServiceGetComplianceSummaryByResourceType = "StarlingDoveService.GetComplianceSummaryByResourceType"
}


export class GetComplianceSummaryByResourceTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetComplianceSummaryByResourceTypeXAmzTargetEnum;
}


export class GetComplianceSummaryByResourceTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetComplianceSummaryByResourceTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetComplianceSummaryByResourceTypeRequest;
}


export class GetComplianceSummaryByResourceTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getComplianceSummaryByResourceTypeResponse?: shared.GetComplianceSummaryByResourceTypeResponse;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
