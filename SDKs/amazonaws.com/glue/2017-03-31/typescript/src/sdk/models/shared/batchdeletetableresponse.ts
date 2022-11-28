import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableError } from "./tableerror";



export class BatchDeleteTableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: TableError })
  errors?: TableError[];
}
