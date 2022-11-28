import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
export declare class ListImagesResponse extends SpeakeasyBase {
    imageIds?: ImageIdentifier[];
    nextToken?: string;
}
