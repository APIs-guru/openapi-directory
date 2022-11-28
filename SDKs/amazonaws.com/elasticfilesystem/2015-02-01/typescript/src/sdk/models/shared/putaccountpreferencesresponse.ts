import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdPreference } from "./resourceidpreference";



export class PutAccountPreferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceIdPreference" })
  resourceIdPreference?: ResourceIdPreference;
}
