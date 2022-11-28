import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
export declare class GetAggregateComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
    accountId: string;
    awsRegion: string;
    complianceType?: ComplianceTypeEnum;
    configRuleName: string;
    configurationAggregatorName: string;
    limit?: number;
    nextToken?: string;
}
