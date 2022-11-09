import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberPermissionsEnum } from "./memberpermissionsenum";
export declare class UpdateEnvironmentMembershipRequest extends SpeakeasyBase {
    environmentId: string;
    permissions: MemberPermissionsEnum;
    userArn: string;
}
