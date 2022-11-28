import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Limit } from "./limit";



export class DescribeAccountLimitsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Limit })
  limits?: Limit[];

  @SpeakeasyMetadata()
  nextMarker?: string;
}
