import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Observation } from "./observation";



export class DescribeObservationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Observation" })
  observation?: Observation;
}
