import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



export class Connections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection })
  connections?: Connection[];
}
