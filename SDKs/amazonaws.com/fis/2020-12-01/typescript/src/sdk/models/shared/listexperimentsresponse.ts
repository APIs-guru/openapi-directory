import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExperimentSummary } from "./experimentsummary";


export class ListExperimentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=experiments", elemType: shared.ExperimentSummary })
  experiments?: ExperimentSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
