import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceKey } from "./resourcekey";



export class BatchGetResourceConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceKeys", elemType: ResourceKey })
  resourceKeys: ResourceKey[];
}
