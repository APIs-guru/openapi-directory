import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
export declare class BatchGetImageRequest extends SpeakeasyBase {
    acceptedMediaTypes?: string[];
    imageIds: ImageIdentifier[];
    registryId?: string;
    repositoryName: string;
}
