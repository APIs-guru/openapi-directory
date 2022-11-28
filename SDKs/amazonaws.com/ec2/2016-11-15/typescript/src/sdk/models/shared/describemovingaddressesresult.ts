import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MovingAddressStatus } from "./movingaddressstatus";



export class DescribeMovingAddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MovingAddressStatus })
  movingAddressStatuses?: MovingAddressStatus[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
