import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkInterface } from "./networkinterface";


// AttemptContainerDetail
/** 
 * An object representing the details of a container that's part of a job attempt.
**/
export class AttemptContainerDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerInstanceArn" })
  containerInstanceArn?: string;

  @Metadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @Metadata({ data: "json, name=logStreamName" })
  logStreamName?: string;

  @Metadata({ data: "json, name=networkInterfaces", elemType: shared.NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=taskArn" })
  taskArn?: string;
}
