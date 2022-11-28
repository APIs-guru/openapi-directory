import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";



export class ListInstanceProfilesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceProfiles", elemType: InstanceProfile })
  instanceProfiles?: InstanceProfile[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
