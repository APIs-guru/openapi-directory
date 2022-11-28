import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableDescription } from "./tabledescription";



export class DescribeTableOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Table" })
  table?: TableDescription;
}
