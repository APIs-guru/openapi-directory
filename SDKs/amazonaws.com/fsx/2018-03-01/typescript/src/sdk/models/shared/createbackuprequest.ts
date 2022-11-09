import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// CreateBackupRequest
/** 
 * The request object for the <code>CreateBackup</code> operation.
**/
export class CreateBackupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VolumeId" })
  volumeId?: string;
}
