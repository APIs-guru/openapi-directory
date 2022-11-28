import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeOffering } from "./instancetypeoffering";



export class DescribeInstanceTypeOfferingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceTypeOffering })
  instanceTypeOfferings?: InstanceTypeOffering[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
