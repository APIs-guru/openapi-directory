import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Target } from "./target";


export class PutTargetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @Metadata({ data: "json, name=Rule" })
  rule: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets: Target[];
}
