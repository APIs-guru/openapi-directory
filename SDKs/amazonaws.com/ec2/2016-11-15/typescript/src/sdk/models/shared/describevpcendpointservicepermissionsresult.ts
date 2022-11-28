import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedPrincipal } from "./allowedprincipal";



export class DescribeVpcEndpointServicePermissionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AllowedPrincipal })
  allowedPrincipals?: AllowedPrincipal[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
