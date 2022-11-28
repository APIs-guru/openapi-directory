import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Column
/** 
 * A column in a <code>Table</code>.
**/
export class Column extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
