import { SpeakeasyBase } from "../../../internal/utils";
import { ActionCodeEnum } from "./actioncodeenum";
import { InventoryRetrievalJobDescription } from "./inventoryretrievaljobdescription";
import { OutputLocation } from "./outputlocation";
import { SelectParameters } from "./selectparameters";
import { StatusCodeEnum } from "./statuscodeenum";
/**
 * Contains the description of an Amazon S3 Glacier job.
**/
export declare class GlacierJobDescription extends SpeakeasyBase {
    action?: ActionCodeEnum;
    archiveId?: string;
    archiveSha256TreeHash?: string;
    archiveSizeInBytes?: number;
    completed?: boolean;
    completionDate?: string;
    creationDate?: string;
    inventoryRetrievalParameters?: InventoryRetrievalJobDescription;
    inventorySizeInBytes?: number;
    jobDescription?: string;
    jobId?: string;
    jobOutputPath?: string;
    outputLocation?: OutputLocation;
    retrievalByteRange?: string;
    sha256TreeHash?: string;
    snsTopic?: string;
    selectParameters?: SelectParameters;
    statusCode?: StatusCodeEnum;
    statusMessage?: string;
    tier?: string;
    vaultArn?: string;
}
