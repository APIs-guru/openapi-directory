import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceKey } from "./resourcekey";


export class BatchGetResourceConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceKeys", elemType: shared.ResourceKey })
  resourceKeys: ResourceKey[];
}
