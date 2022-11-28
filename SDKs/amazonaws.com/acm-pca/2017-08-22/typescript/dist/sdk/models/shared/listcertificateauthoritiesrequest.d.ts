import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceOwnerEnum } from "./resourceownerenum";
export declare class ListCertificateAuthoritiesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceOwner?: ResourceOwnerEnum;
}
