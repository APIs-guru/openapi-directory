import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateConnectivityInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
