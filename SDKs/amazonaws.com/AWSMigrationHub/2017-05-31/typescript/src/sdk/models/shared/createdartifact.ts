import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreatedArtifact
/** 
 * An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).
**/
export class CreatedArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
