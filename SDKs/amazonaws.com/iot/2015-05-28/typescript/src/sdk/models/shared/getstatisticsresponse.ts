import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Statistics } from "./statistics";


export class GetStatisticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=statistics" })
  statistics?: Statistics;
}
