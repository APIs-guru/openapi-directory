import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProblemObservationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProblemId" })
  problemId: string;
}
