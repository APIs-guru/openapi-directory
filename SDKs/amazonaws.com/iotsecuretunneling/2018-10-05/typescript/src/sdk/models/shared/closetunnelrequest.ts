import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CloseTunnelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete?: boolean;

  @Metadata({ data: "json, name=tunnelId" })
  tunnelId: string;
}
