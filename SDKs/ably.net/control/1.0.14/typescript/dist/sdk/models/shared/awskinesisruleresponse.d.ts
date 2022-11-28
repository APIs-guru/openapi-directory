import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum AwsKinesisRuleResponseRequestModeEnum {
    Single = "single"
}
export declare enum AwsKinesisRuleResponseRuleTypeEnum {
    AwsKinesis = "aws/kinesis"
}
export declare enum AwsKinesisRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum AwsKinesisRuleResponseTargetFormatEnum {
    Json = "json"
}
export declare class AwsKinesisRuleResponseTarget extends SpeakeasyBase {
    authentication: any;
    enveloped?: boolean;
    format: AwsKinesisRuleResponseTargetFormatEnum;
    partitionKey: string;
    region: string;
    streamName: string;
}
export declare class AwsKinesisRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: AwsKinesisRuleResponseRequestModeEnum;
    ruleType: AwsKinesisRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: AwsKinesisRuleResponseStatusEnum;
    target: AwsKinesisRuleResponseTarget;
    version?: string;
}
