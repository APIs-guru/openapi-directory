import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClaimDevicesByClaimCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClaimCode" })
  claimCode?: string;

  @Metadata({ data: "json, name=Total" })
  total?: number;
}
