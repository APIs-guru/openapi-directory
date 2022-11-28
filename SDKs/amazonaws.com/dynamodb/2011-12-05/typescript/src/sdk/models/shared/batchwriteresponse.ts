import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchWriteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacityUnits" })
  consumedCapacityUnits?: number;
}
