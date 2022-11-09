import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OperationRead } from "./operationread";


export class OperationReadList extends SpeakeasyBase {
  @Metadata({ data: "json, name=operations", elemType: shared.OperationRead })
  operations: OperationRead[];
}
