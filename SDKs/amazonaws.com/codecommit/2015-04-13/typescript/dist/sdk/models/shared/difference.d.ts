import { SpeakeasyBase } from "../../../internal/utils";
import { BlobMetadata } from "./blobmetadata";
import { ChangeTypeEnumEnum } from "./changetypeenumenum";
/**
 * Returns information about a set of differences for a commit specifier.
**/
export declare class Difference extends SpeakeasyBase {
    afterBlob?: BlobMetadata;
    beforeBlob?: BlobMetadata;
    changeType?: ChangeTypeEnumEnum;
}
