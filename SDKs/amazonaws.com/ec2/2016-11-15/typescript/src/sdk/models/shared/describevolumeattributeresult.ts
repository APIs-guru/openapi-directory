import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeBooleanValue } from "./attributebooleanvalue";
import { ProductCode } from "./productcode";



export class DescribeVolumeAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoEnableIo?: AttributeBooleanValue;

  @SpeakeasyMetadata({ elemType: ProductCode })
  productCodes?: ProductCode[];

  @SpeakeasyMetadata()
  volumeId?: string;
}
