import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceEndpoint } from "./serviceendpoint";
import { Limits } from "./limits";



// DomainStatus
/** 
 * The current status of the search domain.
**/
export class DomainStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

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
  limits?: Limits;

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
