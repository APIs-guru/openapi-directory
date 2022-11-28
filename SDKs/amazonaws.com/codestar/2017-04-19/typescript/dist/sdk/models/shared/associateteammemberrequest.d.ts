import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssociateTeamMemberRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    projectId: string;
    projectRole: string;
    remoteAccessAllowed?: boolean;
    userArn: string;
}
