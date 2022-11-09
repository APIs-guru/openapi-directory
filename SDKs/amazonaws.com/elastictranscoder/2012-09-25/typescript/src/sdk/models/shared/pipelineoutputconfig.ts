import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Permission } from "./permission";


// PipelineOutputConfig
/** 
 * The <code>PipelineOutputConfig</code> structure.
**/
export class PipelineOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: Permission[];

  @Metadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}
