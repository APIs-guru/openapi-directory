import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedActionHistoryItem } from "./managedactionhistoryitem";



// DescribeEnvironmentManagedActionHistoryResult
/** 
 * A result message containing a list of completed and failed managed actions.
**/
export class DescribeEnvironmentManagedActionHistoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ManagedActionHistoryItem })
  managedActionHistoryItems?: ManagedActionHistoryItem[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
