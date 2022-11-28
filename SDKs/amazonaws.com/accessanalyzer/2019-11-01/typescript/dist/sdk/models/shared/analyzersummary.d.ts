import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerStatusEnum } from "./analyzerstatusenum";
import { StatusReason } from "./statusreason";
import { TypeEnum } from "./typeenum";
/**
 * Contains information about the analyzer.
**/
export declare class AnalyzerSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    lastResourceAnalyzed?: string;
    lastResourceAnalyzedAt?: Date;
    name: string;
    status: AnalyzerStatusEnum;
    statusReason?: StatusReason;
    tags?: Map<string, string>;
    type: TypeEnum;
}
