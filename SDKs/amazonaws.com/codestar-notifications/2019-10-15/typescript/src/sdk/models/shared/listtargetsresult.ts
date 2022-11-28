import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetSummary } from "./targetsummary";



export class ListTargetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: TargetSummary })
  targets?: TargetSummary[];
}
