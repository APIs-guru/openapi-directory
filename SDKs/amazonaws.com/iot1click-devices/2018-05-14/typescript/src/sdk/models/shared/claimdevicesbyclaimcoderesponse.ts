import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClaimDevicesByClaimCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClaimCode" })
  claimCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Total" })
  total?: number;
}
