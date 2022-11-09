import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ControlMetadata } from "./controlmetadata";
export declare class ListControlsResponse extends SpeakeasyBase {
    controlMetadataList?: ControlMetadata[];
    nextToken?: string;
}
