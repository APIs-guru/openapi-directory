import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceDefinitionVersion } from "./devicedefinitionversion";
export declare class GetDeviceDefinitionVersionResponse extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    definition?: DeviceDefinitionVersion;
    id?: string;
    nextToken?: string;
    version?: string;
}
