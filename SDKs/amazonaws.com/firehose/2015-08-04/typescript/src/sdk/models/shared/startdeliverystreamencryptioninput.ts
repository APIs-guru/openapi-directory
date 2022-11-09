import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryStreamEncryptionConfigurationInput } from "./deliverystreamencryptionconfigurationinput";


export class StartDeliveryStreamEncryptionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamEncryptionConfigurationInput" })
  deliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;

  @Metadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;
}
