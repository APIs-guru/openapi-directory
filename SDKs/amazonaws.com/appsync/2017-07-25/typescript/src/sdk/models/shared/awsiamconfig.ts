import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsIamConfig
/** 
 * The Identity and Access Management configuration.
**/
export class AwsIamConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=signingRegion" })
  signingRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=signingServiceName" })
  signingServiceName?: string;
}
