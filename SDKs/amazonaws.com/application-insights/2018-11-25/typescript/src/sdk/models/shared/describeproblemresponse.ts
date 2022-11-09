import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Problem } from "./problem";


export class DescribeProblemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Problem" })
  problem?: Problem;
}
