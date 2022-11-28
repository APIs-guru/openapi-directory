import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InitiateDeviceClaimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
