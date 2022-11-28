import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTunnelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tunnelId" })
  tunnelId: string;
}
