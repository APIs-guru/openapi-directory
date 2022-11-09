import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Listener } from "./listener";


export class ListListenersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Listeners", elemType: shared.Listener })
  listeners?: Listener[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
