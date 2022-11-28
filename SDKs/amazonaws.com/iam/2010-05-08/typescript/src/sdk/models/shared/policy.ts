import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// Policy
/** 
 * <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
**/
export class Policy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  attachmentCount?: number;

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata()
  defaultVersionId?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  isAttachable?: boolean;

  @SpeakeasyMetadata()
  path?: string;

  @SpeakeasyMetadata()
  permissionsBoundaryUsageCount?: number;

  @SpeakeasyMetadata()
  policyId?: string;

  @SpeakeasyMetadata()
  policyName?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  updateDate?: Date;
}
