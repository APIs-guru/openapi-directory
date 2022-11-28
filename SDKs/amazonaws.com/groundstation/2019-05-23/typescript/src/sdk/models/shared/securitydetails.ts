import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityDetails
/** 
 * Information about endpoints.
**/
export class SecurityDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=securityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=subnetIds" })
  subnetIds: string[];
}
