import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OpenTunnelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationAccessToken" })
  destinationAccessToken?: string;

  @Metadata({ data: "json, name=sourceAccessToken" })
  sourceAccessToken?: string;

  @Metadata({ data: "json, name=tunnelArn" })
  tunnelArn?: string;

  @Metadata({ data: "json, name=tunnelId" })
  tunnelId?: string;
}
