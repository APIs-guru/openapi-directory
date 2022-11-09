import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageIdentifier } from "./imageidentifier";


// BatchDeleteImageRequest
/** 
 * Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.
**/
export class BatchDeleteImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageIds", elemType: shared.ImageIdentifier })
  imageIds: ImageIdentifier[];

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
