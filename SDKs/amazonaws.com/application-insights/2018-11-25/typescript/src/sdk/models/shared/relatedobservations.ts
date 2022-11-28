import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Observation } from "./observation";



// RelatedObservations
/** 
 * Describes observations related to the problem.
**/
export class RelatedObservations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObservationList", elemType: Observation })
  observationList?: Observation[];
}
