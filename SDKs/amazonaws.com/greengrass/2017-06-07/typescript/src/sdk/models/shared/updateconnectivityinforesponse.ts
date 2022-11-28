import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateConnectivityInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
