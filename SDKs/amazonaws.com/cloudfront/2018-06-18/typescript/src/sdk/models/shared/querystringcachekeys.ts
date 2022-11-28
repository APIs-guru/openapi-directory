import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryStringCacheKeys extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}
