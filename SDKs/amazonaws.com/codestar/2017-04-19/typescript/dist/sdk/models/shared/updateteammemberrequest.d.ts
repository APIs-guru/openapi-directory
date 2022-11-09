import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateTeamMemberRequest extends SpeakeasyBase {
    projectId: string;
    projectRole?: string;
    remoteAccessAllowed?: boolean;
    userArn: string;
}
