import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const GETHEARTBEAT_SERVERS = [
	"http://localhost:8080",
];



export class GetHeartbeatRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;
}


export class GetHeartbeatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getHeartbeat200TextPlainString?: string;

  @Metadata()
  statusCode: number;
}
