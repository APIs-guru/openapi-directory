import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectStorageServerProtocolEnum } from "./objectstorageserverprotocolenum";
/**
 * DescribeLocationObjectStorageResponse
**/
export declare class DescribeLocationObjectStorageResponse extends SpeakeasyBase {
    accessKey?: string;
    agentArns?: string[];
    creationTime?: Date;
    locationArn?: string;
    locationUri?: string;
    serverPort?: number;
    serverProtocol?: ObjectStorageServerProtocolEnum;
}
