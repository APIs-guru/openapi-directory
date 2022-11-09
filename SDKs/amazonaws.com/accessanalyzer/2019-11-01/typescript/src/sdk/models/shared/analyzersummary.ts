import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyzerStatusEnum } from "./analyzerstatusenum";
import { StatusReason } from "./statusreason";
import { TypeEnum } from "./typeenum";


// AnalyzerSummary
/** 
 * Contains information about the analyzer.
**/
export class AnalyzerSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=lastResourceAnalyzed" })
  lastResourceAnalyzed?: string;

  @Metadata({ data: "json, name=lastResourceAnalyzedAt" })
  lastResourceAnalyzedAt?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=status" })
  status: AnalyzerStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: StatusReason;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type: TypeEnum;
}
