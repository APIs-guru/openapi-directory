import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * Contains additional details about a service-specific credential.
**/
export declare class ServiceSpecificCredentialMetadata extends SpeakeasyBase {
    createDate: Date;
    serviceName: string;
    serviceSpecificCredentialId: string;
    serviceUserName: string;
    status: StatusTypeEnum;
    userName: string;
}
