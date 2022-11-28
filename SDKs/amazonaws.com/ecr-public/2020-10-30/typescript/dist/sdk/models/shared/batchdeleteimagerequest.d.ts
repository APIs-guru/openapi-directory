import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
export declare class BatchDeleteImageRequest extends SpeakeasyBase {
    imageIds: ImageIdentifier[];
    registryId?: string;
    repositoryName: string;
}
