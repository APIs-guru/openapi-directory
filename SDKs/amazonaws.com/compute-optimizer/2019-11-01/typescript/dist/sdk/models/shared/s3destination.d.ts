import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
**/
export declare class S3Destination extends SpeakeasyBase {
    bucket?: string;
    key?: string;
    metadataKey?: string;
}
