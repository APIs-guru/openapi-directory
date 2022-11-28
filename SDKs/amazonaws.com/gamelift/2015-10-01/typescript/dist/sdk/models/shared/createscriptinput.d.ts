import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { Tag } from "./tag";
export declare class CreateScriptInput extends SpeakeasyBase {
    name?: string;
    storageLocation?: S3Location;
    tags?: Tag[];
    version?: string;
    zipFile?: string;
}
