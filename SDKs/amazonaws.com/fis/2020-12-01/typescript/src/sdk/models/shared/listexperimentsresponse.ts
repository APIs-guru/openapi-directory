import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentSummary } from "./experimentsummary";



export class ListExperimentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=experiments", elemType: ExperimentSummary })
  experiments?: ExperimentSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
