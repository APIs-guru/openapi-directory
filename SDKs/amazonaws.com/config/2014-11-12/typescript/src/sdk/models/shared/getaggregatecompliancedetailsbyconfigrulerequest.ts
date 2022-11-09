import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";


export class GetAggregateComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=AwsRegion" })
  awsRegion: string;

  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: ComplianceTypeEnum;

  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
