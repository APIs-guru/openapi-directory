import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityProfileTargetMapping } from "./securityprofiletargetmapping";



export class ListSecurityProfilesForTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfileTargetMappings", elemType: SecurityProfileTargetMapping })
  securityProfileTargetMappings?: SecurityProfileTargetMapping[];
}
