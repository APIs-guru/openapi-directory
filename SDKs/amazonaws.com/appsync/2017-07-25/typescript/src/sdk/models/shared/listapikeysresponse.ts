import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiKey } from "./apikey";


export class ListApiKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeys", elemType: shared.ApiKey })
  apiKeys?: ApiKey[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
