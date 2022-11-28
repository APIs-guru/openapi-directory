import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Deployment
/** 
 * Information about an application version deployment.
**/
export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deploymentId?: number;

  @SpeakeasyMetadata()
  deploymentTime?: Date;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  versionLabel?: string;
}
