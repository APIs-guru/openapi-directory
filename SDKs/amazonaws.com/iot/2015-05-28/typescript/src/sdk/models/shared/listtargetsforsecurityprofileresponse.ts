import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecurityProfileTarget } from "./securityprofiletarget";


export class ListTargetsForSecurityProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=securityProfileTargets", elemType: shared.SecurityProfileTarget })
  securityProfileTargets?: SecurityProfileTarget[];
}
