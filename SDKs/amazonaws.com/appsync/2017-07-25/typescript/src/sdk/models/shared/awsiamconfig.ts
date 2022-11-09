import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsIamConfig
/** 
 * The Identity and Access Management configuration.
**/
export class AwsIamConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=signingRegion" })
  signingRegion?: string;

  @Metadata({ data: "json, name=signingServiceName" })
  signingServiceName?: string;
}
