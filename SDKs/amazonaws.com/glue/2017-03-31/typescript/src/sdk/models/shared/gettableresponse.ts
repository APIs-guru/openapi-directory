import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";



export class GetTableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Table" })
  table?: Table;
}
