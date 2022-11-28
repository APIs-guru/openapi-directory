import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceIdentity
/** 
 * <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>
**/
export class InstanceIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;
}
