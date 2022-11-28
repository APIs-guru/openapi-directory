import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OpenTunnelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationAccessToken" })
  destinationAccessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAccessToken" })
  sourceAccessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tunnelArn" })
  tunnelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=tunnelId" })
  tunnelId?: string;
}
