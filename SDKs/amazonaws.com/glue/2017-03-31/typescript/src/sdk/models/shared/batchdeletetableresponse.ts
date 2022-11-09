import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableError } from "./tableerror";


export class BatchDeleteTableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.TableError })
  errors?: TableError[];
}
