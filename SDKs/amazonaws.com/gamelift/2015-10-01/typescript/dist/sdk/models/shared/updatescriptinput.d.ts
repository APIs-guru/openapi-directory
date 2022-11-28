import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
export declare class UpdateScriptInput extends SpeakeasyBase {
    name?: string;
    scriptId: string;
    storageLocation?: S3Location;
    version?: string;
    zipFile?: string;
}
