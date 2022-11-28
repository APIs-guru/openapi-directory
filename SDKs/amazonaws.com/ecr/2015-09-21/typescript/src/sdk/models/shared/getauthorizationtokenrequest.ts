import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAuthorizationTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registryIds" })
  registryIds?: string[];
}
