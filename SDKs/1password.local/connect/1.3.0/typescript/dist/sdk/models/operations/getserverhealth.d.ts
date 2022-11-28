import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetServerHealthServerList: readonly ["http://localhost:8080"];
export declare class GetServerHealth200ApplicationJson extends SpeakeasyBase {
    dependencies?: shared.ServiceDependency[];
    name: string;
    version: string;
}
export declare class GetServerHealthRequest extends SpeakeasyBase {
    serverUrl?: string;
}
export declare class GetServerHealthResponse extends SpeakeasyBase {
    contentType: string;
    getServerHealth200ApplicationJsonObject?: GetServerHealth200ApplicationJson;
    statusCode: number;
}
