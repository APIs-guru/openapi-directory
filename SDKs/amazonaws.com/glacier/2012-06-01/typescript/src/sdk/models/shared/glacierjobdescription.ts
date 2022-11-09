import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=Action" })
  action?: ActionCodeEnum;

  @Metadata({ data: "json, name=ArchiveId" })
  archiveId?: string;

  @Metadata({ data: "json, name=ArchiveSHA256TreeHash" })
  archiveSha256TreeHash?: string;

  @Metadata({ data: "json, name=ArchiveSizeInBytes" })
  archiveSizeInBytes?: number;

  @Metadata({ data: "json, name=Completed" })
  completed?: boolean;

  @Metadata({ data: "json, name=CompletionDate" })
  completionDate?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=InventoryRetrievalParameters" })
  inventoryRetrievalParameters?: InventoryRetrievalJobDescription;

  @Metadata({ data: "json, name=InventorySizeInBytes" })
  inventorySizeInBytes?: number;

  @Metadata({ data: "json, name=JobDescription" })
  jobDescription?: string;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobOutputPath" })
  jobOutputPath?: string;

  @Metadata({ data: "json, name=OutputLocation" })
  outputLocation?: OutputLocation;

  @Metadata({ data: "json, name=RetrievalByteRange" })
  retrievalByteRange?: string;

  @Metadata({ data: "json, name=SHA256TreeHash" })
  sha256TreeHash?: string;

  @Metadata({ data: "json, name=SNSTopic" })
  snsTopic?: string;

  @Metadata({ data: "json, name=SelectParameters" })
  selectParameters?: SelectParameters;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode?: StatusCodeEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=Tier" })
  tier?: string;

  @Metadata({ data: "json, name=VaultARN" })
  vaultArn?: string;
}
