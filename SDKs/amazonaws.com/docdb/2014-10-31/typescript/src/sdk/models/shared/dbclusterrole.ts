import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterRole
/** 
 * Describes an Identity and Access Management (IAM) role that is associated with a cluster.
**/
export class DbClusterRole extends SpeakeasyBase {
  @SpeakeasyMetadata()
  roleArn?: string;

  @SpeakeasyMetadata()
  status?: string;
}
