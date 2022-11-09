import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Graph
/** 
 * A behavior graph in Detective.
**/
export class Graph extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;
}
