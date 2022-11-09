import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BaseConfigurationItem } from "./baseconfigurationitem";
import { ResourceKey } from "./resourcekey";


export class BatchGetResourceConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseConfigurationItems", elemType: shared.BaseConfigurationItem })
  baseConfigurationItems?: BaseConfigurationItem[];

  @Metadata({ data: "json, name=unprocessedResourceKeys", elemType: shared.ResourceKey })
  unprocessedResourceKeys?: ResourceKey[];
}
