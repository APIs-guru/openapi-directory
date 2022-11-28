import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";



// AttemptContainerDetail
/** 
 * An object representing the details of a container that's part of a job attempt.
**/
export class AttemptContainerDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerInstanceArn" })
  containerInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=logStreamName" })
  logStreamName?: string;

  @SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=taskArn" })
  taskArn?: string;
}
