import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecurityProfileTargetMapping } from "./securityprofiletargetmapping";


export class ListSecurityProfilesForTargetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=securityProfileTargetMappings", elemType: shared.SecurityProfileTargetMapping })
  securityProfileTargetMappings?: SecurityProfileTargetMapping[];
}
