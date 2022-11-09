import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeProblemObservationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProblemId" })
  problemId: string;
}
