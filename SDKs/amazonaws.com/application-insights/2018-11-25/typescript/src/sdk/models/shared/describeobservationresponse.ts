import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Observation } from "./observation";


export class DescribeObservationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Observation" })
  observation?: Observation;
}
