import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStreamEncryptionConfigurationInput } from "./deliverystreamencryptionconfigurationinput";



export class StartDeliveryStreamEncryptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamEncryptionConfigurationInput" })
  deliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;
}
