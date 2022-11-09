import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableDescription } from "./tabledescription";


export class DescribeTableOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Table" })
  table?: TableDescription;
}
