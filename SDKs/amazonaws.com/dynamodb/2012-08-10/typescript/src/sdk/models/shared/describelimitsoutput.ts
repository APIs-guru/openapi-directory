import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeLimitsOutput
/** 
 * Represents the output of a <code>DescribeLimits</code> operation.
**/
export class DescribeLimitsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountMaxReadCapacityUnits" })
  accountMaxReadCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=AccountMaxWriteCapacityUnits" })
  accountMaxWriteCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=TableMaxReadCapacityUnits" })
  tableMaxReadCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=TableMaxWriteCapacityUnits" })
  tableMaxWriteCapacityUnits?: number;
}
