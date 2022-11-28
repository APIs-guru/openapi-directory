import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelatedObservations } from "./relatedobservations";



export class DescribeProblemObservationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RelatedObservations" })
  relatedObservations?: RelatedObservations;
}
