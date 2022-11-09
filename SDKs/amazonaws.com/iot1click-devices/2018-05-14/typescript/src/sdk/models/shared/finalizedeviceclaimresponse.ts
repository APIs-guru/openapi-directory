import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FinalizeDeviceClaimResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: string;
}
