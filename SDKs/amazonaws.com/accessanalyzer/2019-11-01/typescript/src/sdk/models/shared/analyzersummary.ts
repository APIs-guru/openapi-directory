import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerStatusEnum } from "./analyzerstatusenum";
import { StatusReason } from "./statusreason";
import { TypeEnum } from "./typeenum";



// AnalyzerSummary
/** 
 * Contains information about the analyzer.
**/
export class AnalyzerSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=lastResourceAnalyzed" })
  lastResourceAnalyzed?: string;

  @SpeakeasyMetadata({ data: "json, name=lastResourceAnalyzedAt" })
  lastResourceAnalyzedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: AnalyzerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: StatusReason;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: TypeEnum;
}
