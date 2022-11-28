import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EphemeralStorage
/** 
 * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p> <note> <p>This parameter is only supported for tasks hosted on Fargate using platform version <code>1.4.0</code> or later.</p> </note>
**/
export class EphemeralStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sizeInGiB" })
  sizeInGiB: number;
}
