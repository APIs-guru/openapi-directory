import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare const GETHEARTBEAT_SERVERS: string[];
export declare class GetHeartbeatRequest extends SpeakeasyBase {
    serverUrl?: string;
}
export declare class GetHeartbeatResponse extends SpeakeasyBase {
    contentType: string;
    getHeartbeat200TextPlainString?: string;
    statusCode: number;
}
