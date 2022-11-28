import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableVersionError } from "./tableversionerror";



export class BatchDeleteTableVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: TableVersionError })
  errors?: TableVersionError[];
}
