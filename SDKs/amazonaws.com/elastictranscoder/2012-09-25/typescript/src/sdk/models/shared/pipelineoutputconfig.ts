import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";



// PipelineOutputConfig
/** 
 * The <code>PipelineOutputConfig</code> structure.
**/
export class PipelineOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Permissions", elemType: Permission })
  permissions?: Permission[];

  @SpeakeasyMetadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}
