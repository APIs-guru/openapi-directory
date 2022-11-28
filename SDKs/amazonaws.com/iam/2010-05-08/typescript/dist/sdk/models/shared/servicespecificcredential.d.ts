import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * Contains the details of a service-specific credential.
**/
export declare class ServiceSpecificCredential extends SpeakeasyBase {
    createDate: Date;
    serviceName: string;
    servicePassword: string;
    serviceSpecificCredentialId: string;
    serviceUserName: string;
    status: StatusTypeEnum;
    userName: string;
}
