import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectStorageServerProtocolEnum } from "./objectstorageserverprotocolenum";
import { TagListEntry } from "./taglistentry";
/**
 * CreateLocationObjectStorageRequest
**/
export declare class CreateLocationObjectStorageRequest extends SpeakeasyBase {
    accessKey?: string;
    agentArns: string[];
    bucketName: string;
    secretKey?: string;
    serverHostname: string;
    serverPort?: number;
    serverProtocol?: ObjectStorageServerProtocolEnum;
    subdirectory?: string;
    tags?: TagListEntry[];
}
