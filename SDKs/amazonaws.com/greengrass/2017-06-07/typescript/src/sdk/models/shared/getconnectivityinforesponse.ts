import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectivityInfo } from "./connectivityinfo";



export class GetConnectivityInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectivityInfo", elemType: ConnectivityInfo })
  connectivityInfo?: ConnectivityInfo[];

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
