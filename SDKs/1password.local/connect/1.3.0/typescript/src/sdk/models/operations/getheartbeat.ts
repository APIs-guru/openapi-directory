import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const GetHeartbeatServerList = [
	"http://localhost:8080",
] as const;


export class GetHeartbeatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;
}


export class GetHeartbeatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getHeartbeat200TextPlainString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
