import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const GETSERVERHEALTH_SERVERS: string[];
export declare class GetServerHealthRequest extends SpeakeasyBase {
    serverUrl?: string;
}
export declare class GetServerHealth200ApplicationJson extends SpeakeasyBase {
    dependencies?: shared.ServiceDependency[];
    name: string;
    version: string;
}
export declare class GetServerHealthResponse extends SpeakeasyBase {
    contentType: string;
    getServerHealth200ApplicationJsonObject?: GetServerHealth200ApplicationJson;
    statusCode: number;
}
