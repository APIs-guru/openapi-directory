import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { ArtifactStoreTypeEnum } from "./artifactstoretypeenum";
/**
 * <p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
**/
export declare class ArtifactStore extends SpeakeasyBase {
    encryptionKey?: EncryptionKey;
    location: string;
    type: ArtifactStoreTypeEnum;
}
