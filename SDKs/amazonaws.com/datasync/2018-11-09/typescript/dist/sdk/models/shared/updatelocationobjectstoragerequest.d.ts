import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectStorageServerProtocolEnum } from "./objectstorageserverprotocolenum";
export declare class UpdateLocationObjectStorageRequest extends SpeakeasyBase {
    accessKey?: string;
    agentArns?: string[];
    locationArn: string;
    secretKey?: string;
    serverPort?: number;
    serverProtocol?: ObjectStorageServerProtocolEnum;
    subdirectory?: string;
}
