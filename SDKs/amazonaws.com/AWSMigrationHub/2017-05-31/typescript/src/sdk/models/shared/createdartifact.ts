import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreatedArtifact
/** 
 * An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).
**/
export class CreatedArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
