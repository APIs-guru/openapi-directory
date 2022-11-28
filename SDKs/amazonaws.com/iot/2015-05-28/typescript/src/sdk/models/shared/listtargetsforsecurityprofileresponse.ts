import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityProfileTarget } from "./securityprofiletarget";



export class ListTargetsForSecurityProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfileTargets", elemType: SecurityProfileTarget })
  securityProfileTargets?: SecurityProfileTarget[];
}
