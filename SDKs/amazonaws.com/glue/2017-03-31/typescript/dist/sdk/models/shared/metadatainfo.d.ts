import { SpeakeasyBase } from "../../../internal/utils";
import { OtherMetadataValueListItem } from "./othermetadatavaluelistitem";
/**
 * A structure containing metadata information for a schema version.
**/
export declare class MetadataInfo extends SpeakeasyBase {
    createdTime?: string;
    metadataValue?: string;
    otherMetadataValueList?: OtherMetadataValueListItem[];
}
