import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetSummary } from "./targetsummary";


export class ListTargetsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.TargetSummary })
  targets?: TargetSummary[];
}
