import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityProfileIdentifier } from "./securityprofileidentifier";



export class ListSecurityProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfileIdentifiers", elemType: SecurityProfileIdentifier })
  securityProfileIdentifiers?: SecurityProfileIdentifier[];
}
