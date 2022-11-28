import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionCodeEnum } from "./actioncodeenum";
import { InventoryRetrievalJobDescription } from "./inventoryretrievaljobdescription";
import { OutputLocation } from "./outputlocation";
import { SelectParameters } from "./selectparameters";
import { StatusCodeEnum } from "./statuscodeenum";



// GlacierJobDescription
/** 
 * Contains the description of an Amazon S3 Glacier job.
**/
export class GlacierJobDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: ActionCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ArchiveId" })
  archiveId?: string;

  @SpeakeasyMetadata({ data: "json, name=ArchiveSHA256TreeHash" })
  archiveSha256TreeHash?: string;

  @SpeakeasyMetadata({ data: "json, name=ArchiveSizeInBytes" })
  archiveSizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=Completed" })
  completed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CompletionDate" })
  completionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=InventoryRetrievalParameters" })
  inventoryRetrievalParameters?: InventoryRetrievalJobDescription;

  @SpeakeasyMetadata({ data: "json, name=InventorySizeInBytes" })
  inventorySizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=JobDescription" })
  jobDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobOutputPath" })
  jobOutputPath?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputLocation" })
  outputLocation?: OutputLocation;

  @SpeakeasyMetadata({ data: "json, name=RetrievalByteRange" })
  retrievalByteRange?: string;

  @SpeakeasyMetadata({ data: "json, name=SHA256TreeHash" })
  sha256TreeHash?: string;

  @SpeakeasyMetadata({ data: "json, name=SNSTopic" })
  snsTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=SelectParameters" })
  selectParameters?: SelectParameters;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode?: StatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: string;

  @SpeakeasyMetadata({ data: "json, name=VaultARN" })
  vaultArn?: string;
}
