import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecurityProfileIdentifier } from "./securityprofileidentifier";


export class ListSecurityProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=securityProfileIdentifiers", elemType: shared.SecurityProfileIdentifier })
  securityProfileIdentifiers?: SecurityProfileIdentifier[];
}
