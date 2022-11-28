import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum AwsKinesisRulePostRequestModeEnum {
    Single = "single"
}
export declare enum AwsKinesisRulePostRuleTypeEnum {
    AwsKinesis = "aws/kinesis"
}
export declare enum AwsKinesisRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum AwsKinesisRulePostTargetFormatEnum {
    Json = "json"
}
export declare class AwsKinesisRulePostTarget extends SpeakeasyBase {
    authentication: any;
    enveloped?: boolean;
    format: AwsKinesisRulePostTargetFormatEnum;
    partitionKey: string;
    region: string;
    streamName: string;
}
export declare class AwsKinesisRulePost extends SpeakeasyBase {
    requestMode: AwsKinesisRulePostRequestModeEnum;
    ruleType: AwsKinesisRulePostRuleTypeEnum;
    source: RuleSource;
    status?: AwsKinesisRulePostStatusEnum;
    target: AwsKinesisRulePostTarget;
}
