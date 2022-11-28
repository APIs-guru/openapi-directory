import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.
**/
export declare class DebugSession extends SpeakeasyBase {
    sessionEnabled?: boolean;
    sessionTarget?: string;
}
