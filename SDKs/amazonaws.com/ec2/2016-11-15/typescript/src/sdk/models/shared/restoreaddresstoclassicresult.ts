import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



export class RestoreAddressToClassicResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  publicIp?: string;

  @SpeakeasyMetadata()
  status?: StatusEnum;
}
