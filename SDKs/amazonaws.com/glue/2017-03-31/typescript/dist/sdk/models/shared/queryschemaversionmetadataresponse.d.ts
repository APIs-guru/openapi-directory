import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataInfo } from "./metadatainfo";
export declare class QuerySchemaVersionMetadataResponse extends SpeakeasyBase {
    metadataInfoMap?: Map<string, MetadataInfo>;
    nextToken?: string;
    schemaVersionId?: string;
}
