import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InitiateDeviceClaimResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: string;
}
