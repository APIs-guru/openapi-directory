import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Statistics } from "./statistics";



export class GetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: Statistics;
}
