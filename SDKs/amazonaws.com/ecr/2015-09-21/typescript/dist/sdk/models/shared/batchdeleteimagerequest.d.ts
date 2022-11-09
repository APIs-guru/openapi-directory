import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageIdentifier } from "./imageidentifier";
/**
 * Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.
**/
export declare class BatchDeleteImageRequest extends SpeakeasyBase {
    imageIds: ImageIdentifier[];
    registryId?: string;
    repositoryName: string;
}
