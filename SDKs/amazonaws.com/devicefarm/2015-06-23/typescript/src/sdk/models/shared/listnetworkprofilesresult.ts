import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkProfile } from "./networkprofile";



export class ListNetworkProfilesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkProfiles", elemType: NetworkProfile })
  networkProfiles?: NetworkProfile[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
