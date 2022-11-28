import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseConfigurationItem } from "./baseconfigurationitem";
import { ResourceKey } from "./resourcekey";



export class BatchGetResourceConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseConfigurationItems", elemType: BaseConfigurationItem })
  baseConfigurationItems?: BaseConfigurationItem[];

  @SpeakeasyMetadata({ data: "json, name=unprocessedResourceKeys", elemType: ResourceKey })
  unprocessedResourceKeys?: ResourceKey[];
}
