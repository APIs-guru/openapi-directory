import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProblemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProblemId" })
  problemId: string;
}
