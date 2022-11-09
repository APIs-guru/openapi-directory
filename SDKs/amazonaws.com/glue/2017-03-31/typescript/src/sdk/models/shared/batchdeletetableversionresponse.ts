import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableVersionError } from "./tableversionerror";


export class BatchDeleteTableVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.TableVersionError })
  errors?: TableVersionError[];
}
