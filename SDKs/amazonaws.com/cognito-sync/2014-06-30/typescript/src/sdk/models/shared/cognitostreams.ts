import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingStatusEnum } from "./streamingstatusenum";


// CognitoStreams
/** 
 * Configuration options for configure Cognito streams.
**/
export class CognitoStreams extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;

  @Metadata({ data: "json, name=StreamingStatus" })
  streamingStatus?: StreamingStatusEnum;
}
