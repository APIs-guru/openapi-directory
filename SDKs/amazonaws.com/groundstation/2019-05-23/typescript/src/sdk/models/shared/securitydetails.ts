import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityDetails
/** 
 * Information about endpoints.
**/
export class SecurityDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=subnetIds" })
  subnetIds: string[];
}
