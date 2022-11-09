import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RelatedObservations } from "./relatedobservations";


export class DescribeProblemObservationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RelatedObservations" })
  relatedObservations?: RelatedObservations;
}
