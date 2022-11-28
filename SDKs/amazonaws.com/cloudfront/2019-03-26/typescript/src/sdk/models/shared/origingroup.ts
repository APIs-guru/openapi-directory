import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginGroupFailoverCriteria } from "./origingroupfailovercriteria";
import { OriginGroupMembers } from "./origingroupmembers";



// OriginGroup
/** 
 * An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen.
**/
export class OriginGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  failoverCriteria: OriginGroupFailoverCriteria;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  members: OriginGroupMembers;
}
