import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingStatusEnum } from "./streamingstatusenum";



// CognitoStreams
/** 
 * Configuration options for configure Cognito streams.
**/
export class CognitoStreams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamingStatus" })
  streamingStatus?: StreamingStatusEnum;
}
