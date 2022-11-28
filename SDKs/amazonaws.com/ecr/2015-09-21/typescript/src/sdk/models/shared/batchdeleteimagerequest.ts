import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";



// BatchDeleteImageRequest
/** 
 * Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.
**/
export class BatchDeleteImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageIds", elemType: ImageIdentifier })
  imageIds: ImageIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
