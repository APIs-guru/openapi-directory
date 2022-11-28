import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HostOffering } from "./hostoffering";



export class DescribeHostReservationOfferingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: HostOffering })
  offeringSet?: HostOffering[];
}
