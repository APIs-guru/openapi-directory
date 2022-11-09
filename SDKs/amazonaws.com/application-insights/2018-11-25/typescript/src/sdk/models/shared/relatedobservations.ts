import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Observation } from "./observation";


// RelatedObservations
/** 
 * Describes observations related to the problem.
**/
export class RelatedObservations extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObservationList", elemType: shared.Observation })
  observationList?: Observation[];
}
