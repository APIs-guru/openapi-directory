import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Problem } from "./problem";



export class DescribeProblemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Problem" })
  problem?: Problem;
}
