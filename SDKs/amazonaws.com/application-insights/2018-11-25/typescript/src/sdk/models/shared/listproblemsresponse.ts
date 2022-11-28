import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Problem } from "./problem";



export class ListProblemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProblemList", elemType: Problem })
  problemList?: Problem[];
}
