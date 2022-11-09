import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberPermissionsEnum } from "./memberpermissionsenum";
export declare class CreateEnvironmentMembershipRequest extends SpeakeasyBase {
    environmentId: string;
    permissions: MemberPermissionsEnum;
    userArn: string;
}
