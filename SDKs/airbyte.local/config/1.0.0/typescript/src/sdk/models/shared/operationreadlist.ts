import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationRead } from "./operationread";



export class OperationReadList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operations", elemType: OperationRead })
  operations: OperationRead[];
}
