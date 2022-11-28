import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainStatus } from "./domainstatus";



// DescribeDomainsResponse
/** 
 * A response message that contains the status of one or more domains.
**/
export class DescribeDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DomainStatus })
  domainStatusList: DomainStatus[];
}
