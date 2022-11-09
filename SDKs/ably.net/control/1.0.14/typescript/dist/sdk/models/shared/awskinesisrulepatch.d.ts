import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AwsKinesisRulePatchRequestModeEnum {
    Single = "single"
}
export declare enum AwsKinesisRulePatchRuleTypeEnum {
    AwsKinesis = "aws/kinesis"
}
export declare enum AwsKinesisRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum AwsKinesisRulePatchTargetFormatEnum {
    Json = "json"
}
export declare class AwsKinesisRulePatchTarget extends SpeakeasyBase {
    authentication?: any;
    enveloped?: boolean;
    format?: AwsKinesisRulePatchTargetFormatEnum;
    partitionKey?: string;
    region?: string;
    streamName?: string;
}
export declare class AwsKinesisRulePatch extends SpeakeasyBase {
    requestMode?: AwsKinesisRulePatchRequestModeEnum;
    ruleType?: AwsKinesisRulePatchRuleTypeEnum;
    source?: RuleSource;
    status?: AwsKinesisRulePatchStatusEnum;
    target?: AwsKinesisRulePatchTarget;
}
