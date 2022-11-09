import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkProfile } from "./networkprofile";


export class ListNetworkProfilesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkProfiles", elemType: shared.NetworkProfile })
  networkProfiles?: NetworkProfile[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
