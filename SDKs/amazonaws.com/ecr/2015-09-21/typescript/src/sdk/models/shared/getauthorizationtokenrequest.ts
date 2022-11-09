import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAuthorizationTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=registryIds" })
  registryIds?: string[];
}
