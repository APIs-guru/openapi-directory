import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiKey } from "./apikey";



export class ListApiKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeys", elemType: ApiKey })
  apiKeys?: ApiKey[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
