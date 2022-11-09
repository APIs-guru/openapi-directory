import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.
**/
export declare class Certificate extends SpeakeasyBase {
    certificateArn?: string;
    certificateCreationDate?: Date;
    certificateIdentifier?: string;
    certificateOwner?: string;
    certificatePem?: string;
    certificateWallet?: string;
    keyLength?: number;
    signingAlgorithm?: string;
    validFromDate?: Date;
    validToDate?: Date;
}
