import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchWriteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedCapacityUnits" })
  consumedCapacityUnits?: number;
}
