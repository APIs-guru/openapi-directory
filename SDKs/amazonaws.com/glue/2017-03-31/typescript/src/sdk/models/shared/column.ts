import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Column
/** 
 * A column in a <code>Table</code>.
**/
export class Column extends SpeakeasyBase {
  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
