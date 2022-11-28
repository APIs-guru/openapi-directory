import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceEndpoint } from "./serviceendpoint";



// DomainStatus
/** 
 * The current status of the search domain.
**/
export class DomainStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  created?: boolean;

  @SpeakeasyMetadata()
  deleted?: boolean;

  @SpeakeasyMetadata()
  docService?: ServiceEndpoint;

  @SpeakeasyMetadata()
  domainId: string;

  @SpeakeasyMetadata()
  domainName: string;

  @SpeakeasyMetadata()
  numSearchableDocs?: number;

  @SpeakeasyMetadata()
  processing?: boolean;

  @SpeakeasyMetadata()
  requiresIndexDocuments: boolean;

  @SpeakeasyMetadata()
  searchInstanceCount?: number;

  @SpeakeasyMetadata()
  searchInstanceType?: string;

  @SpeakeasyMetadata()
  searchPartitionCount?: number;

  @SpeakeasyMetadata()
  searchService?: ServiceEndpoint;
}
