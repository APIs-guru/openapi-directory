import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetComplianceSummaryByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetComplianceSummaryByConfigRule = "StarlingDoveService.GetComplianceSummaryByConfigRule"
}


export class GetComplianceSummaryByConfigRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetComplianceSummaryByConfigRuleXAmzTargetEnum;
}


export class GetComplianceSummaryByConfigRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetComplianceSummaryByConfigRuleHeaders;
}


export class GetComplianceSummaryByConfigRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getComplianceSummaryByConfigRuleResponse?: shared.GetComplianceSummaryByConfigRuleResponse;

  @Metadata()
  statusCode: number;
}
