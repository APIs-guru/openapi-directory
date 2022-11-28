import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FinalizeDeviceClaimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
