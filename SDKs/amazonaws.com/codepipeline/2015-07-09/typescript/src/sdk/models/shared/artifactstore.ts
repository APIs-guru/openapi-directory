import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionKey } from "./encryptionkey";
import { ArtifactStoreTypeEnum } from "./artifactstoretypeenum";


// ArtifactStore
/** 
 * <p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
**/
export class ArtifactStore extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: EncryptionKey;

  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=type" })
  type: ArtifactStoreTypeEnum;
}
