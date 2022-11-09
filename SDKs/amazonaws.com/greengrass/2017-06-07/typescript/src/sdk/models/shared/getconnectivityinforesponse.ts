import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectivityInfo } from "./connectivityinfo";


export class GetConnectivityInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectivityInfo", elemType: shared.ConnectivityInfo })
  connectivityInfo?: ConnectivityInfo[];

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
