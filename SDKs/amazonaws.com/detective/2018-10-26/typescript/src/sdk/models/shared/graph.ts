import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Graph
/** 
 * A behavior graph in Detective.
**/
export class Graph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;
}
