import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Connection } from "./connection";


export class Connections extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections", elemType: shared.Connection })
  connections?: Connection[];
}
