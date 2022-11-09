import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeLimitsOutput
/** 
 * Represents the output of a <code>DescribeLimits</code> operation.
**/
export class DescribeLimitsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountMaxReadCapacityUnits" })
  accountMaxReadCapacityUnits?: number;

  @Metadata({ data: "json, name=AccountMaxWriteCapacityUnits" })
  accountMaxWriteCapacityUnits?: number;

  @Metadata({ data: "json, name=TableMaxReadCapacityUnits" })
  tableMaxReadCapacityUnits?: number;

  @Metadata({ data: "json, name=TableMaxWriteCapacityUnits" })
  tableMaxWriteCapacityUnits?: number;
}
