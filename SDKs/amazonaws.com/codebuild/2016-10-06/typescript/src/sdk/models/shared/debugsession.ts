import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DebugSession
/** 
 * Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.
**/
export class DebugSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionEnabled" })
  sessionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sessionTarget" })
  sessionTarget?: string;
}
