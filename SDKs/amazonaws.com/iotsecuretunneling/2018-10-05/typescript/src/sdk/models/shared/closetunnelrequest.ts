import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CloseTunnelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tunnelId" })
  tunnelId: string;
}
