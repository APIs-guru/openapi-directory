import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceProfile } from "./instanceprofile";


export class ListInstanceProfilesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceProfiles", elemType: shared.InstanceProfile })
  instanceProfiles?: InstanceProfile[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
