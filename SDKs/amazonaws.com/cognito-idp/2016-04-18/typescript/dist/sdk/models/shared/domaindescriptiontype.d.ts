import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDomainConfigType } from "./customdomainconfigtype";
import { DomainStatusTypeEnum } from "./domainstatustypeenum";
/**
 * A container for information about a domain.
**/
export declare class DomainDescriptionType extends SpeakeasyBase {
    awsAccountId?: string;
    cloudFrontDistribution?: string;
    customDomainConfig?: CustomDomainConfigType;
    domain?: string;
    s3Bucket?: string;
    status?: DomainStatusTypeEnum;
    userPoolId?: string;
    version?: string;
}
