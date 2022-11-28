import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetComplianceSummaryByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetComplianceSummaryByConfigRule = "StarlingDoveService.GetComplianceSummaryByConfigRule"
}


export class GetComplianceSummaryByConfigRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetComplianceSummaryByConfigRuleXAmzTargetEnum;
}


export class GetComplianceSummaryByConfigRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetComplianceSummaryByConfigRuleHeaders;
}


export class GetComplianceSummaryByConfigRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getComplianceSummaryByConfigRuleResponse?: shared.GetComplianceSummaryByConfigRuleResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
